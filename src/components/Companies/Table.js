import React, {Component} from 'react';
import moment from 'moment';
// map
import api from 'services/Api';
import PrettyJson from 'components/Helpers/PrettyJson';
import tableDataBase from 'store/tableDataBase';
import Thead from './Thead';
import Tbody from './Tbody';

class Table extends Component{
  constructor(){
    super();

    this.state = {
      tableDataHead: null,
      tableDataBody: null,
      responce: null
    }
  }

  componentDidMount(){

    // thead is know - just set the state
    this.setState({
      tableDataHead: tableDataBase.thead,
    })

    /// body is parsed from api - resolve promise
    this
      .getOnboardings()
      .then(res => {
        console.log(res)
        // covert responce to react format
        let respDataBody = res.map(x => this.convertResponceToTable(x))
        // let respDataBody = tableDataBase.tbody
        // respDataBody.forEach(x => x.cells.forEach(y => {
        //   if ( y.id === 3 || y.id === 4 || y.id === 5 ){
        //     y.text = moment(y.text, "DD/MM/YYYY") // convert timestamps to moment (comparable obj)
        //   }
        // }))

        this.setState({
          responce: res,
          tableDataBody: respDataBody
        })
      })
  }

  getOnboardings = () => {
    return api
      .get('onboardings')
      .then(res => res.data)
      .catch(err => {
        console.log('error on GET onboardings', err)
      })
  }

  convertResponceToTable = (x) => {
    return {
      id: x.id,
      cells: [
        {id: 1, text: x.company_name}, // Company name
        {id: 2, text: x.company_uen}, // UEN
        {id: 3, text: moment("27/03/2017", "DD/MM/YYYY")}, // Fiscal Year End TODO
        {id: 4, text: moment("27/05/2017", "DD/MM/YYYY")},  // annual general meeting TODO
        {id: 5, text: moment("27/03/2018", "DD/MM/YYYY")}, // Renewal TODO
        {id: 6, text: x.a_corpsecretary}, // Corporate secretary
        {id: 7, text: x.a_accounting}, // Accounting
        {id: 8, text: x.a_status}, // Status - default 1, [1,2,3]
        {id: 9, text: x.a_action} // Action needed
      ]
    }
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
      tableDataBody,
      responce // testing purposes only
    } = this.state;


    return(
      <div className="page-wrap">
        <div className="container">
          <div className="table">
            { tableDataHead &&
              <Thead
                rows={tableDataHead}
                sortData={this.sortData} />
            }

            { !tableDataBody ?
              <p>Loading ... </p>
              :
              <Tbody
                rows={tableDataBody} />
            }
          </div>

          <PrettyJson data={responce} />

        </div>

      </div>
    )
  }
}

export default Table
