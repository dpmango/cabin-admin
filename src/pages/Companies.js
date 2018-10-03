import React, {Component} from 'react';
import Header from 'components/Shared/Header';
import Footer from 'components/Shared/Footer';
import Table from 'components/Companies/Table';

class Companies extends Component{
  render(){
    return(
      <div className="admin">
        <Header />
        <Table />
      </div>
    )
  }
}

export default Companies
