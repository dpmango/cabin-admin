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
    respDataBody.forEach(x => x[0] = moment(x[0]) ) // convert to moment

    setTimeout( () => {
      this.setState({
        tableDataHead: tableDataBase.thead,
        tableDataBody: respDataBody
      })
    }, 500);

  }

  sortData = (index, sortDirDESC) => {
    let sortedData = this.state.tableDataBody;

    if ( sortDirDESC ){
      sortedData = sortedData.sort( (a,b) => parseInt(b[index], 10) - parseInt(a[index], 10) ) // desc
    } else {
      sortedData = sortedData.sort( (a,b) => parseInt(a[index], 10) - parseInt(b[index], 10) ) // asc
    }

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
