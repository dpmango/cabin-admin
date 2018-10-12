import React, {Component} from 'react';
import moment from 'moment';
import { groupBy } from 'underscore';
// map

// import api from 'services/Api';
import tableDataBase from 'store/tableDataBase';
import Thead from './Thead';
import Tbody from './Tbody';

class Table extends Component{
  constructor(){
    super();

    this.state = {
      tableDataHead: null,
      tableDataBody: null
    }
  }

  componentDidMount(){

    let respDataBody = tableDataBase.tbody
    respDataBody.forEach(x => x.cells.forEach(y => {
      if ( y.id === 3 || y.id === 4 || y.id === 5 ){
        y.text = moment(y.text, "DD/MM/YYYY") // convert timestamps to moment (comparable obj)
      }
    }))

    setTimeout( () => {
      this.setState({
        tableDataHead: tableDataBase.thead,
        tableDataBody: respDataBody
      })
    }, 500);

  }

  // DATA SORTING FUNCTIONS
  getComparableValue = (cell) => {
    const type = typeof(cell);
    if ( type === "number" ){
      return parseInt(cell, 10)
    } else if ( type === "object" ){
      if ( cell._isAMomentObject ){
        return parseInt(cell.format('YYYY-MM-DD'), 10) // sorting format
      } else {
        if ( cell.isActive ) return 1
        if ( cell.isPending ) return 2
        if ( cell.isInactive ) return 3
      }
    } else {
      return cell
    }
  }

  // switch determines comprasion rules (plus, minus, greater, smaller)
  sortingSwitch = (a, b, isString, directionDESC) => {
    // sorting rules for the number (including moment dates and objects)
    if ( !isString ){
      if ( directionDESC ){
        return this.getComparableValue(b) - this.getComparableValue(a)
      } else {
        return this.getComparableValue(a) - this.getComparableValue(b)
      }

    // sorting rules for the string
    } else if ( isString ){
      if ( directionDESC ){
        return this.getComparableValue(b) < this.getComparableValue(a)
      } else {
        return this.getComparableValue(b) > this.getComparableValue(a)
      }
    }
  }

  // triggered from THEAD - get indexes and direction
  sortData = (id, sortDirDESC) => {
    let sortedData = this.state.tableDataBody;
    let index = id - 1;
    let isString = typeof(sortedData[0].cells[index].text) === "string"

    console.log(isString)

    sortedData = sortedData.sort( (a,b) => this.sortingSwitch(
      a.cells[index].text,
      b.cells[index].text,
      isString,
      sortDirDESC
    ) )

    this.setState({
      tableDataBody: sortedData
    })
  }

  render(){
    const {
      tableDataHead,
      tableDataBody
    } = this.state;

    if ( !tableDataBody ) {
      return (
        <p>Loading ... </p>
      )
    }

    return(
      <div className="page-wrap">
        <div className="container">
          <div className="table">
            <Thead
              rows={tableDataHead}
              sortData={this.sortData} />
            <Tbody
              rows={tableDataBody} />
          </div>
        </div>

      </div>
    )
  }
}

export default Table
