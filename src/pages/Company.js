import React, {Component} from 'react';
import Header from 'components/Shared/Header';
import History from 'components/Company/History';
import CompanyAdmin from 'components/Company/Admin';

class Company extends Component{
  render(){
    return(
      <div className="admin">
        <Header />
        <CompanyAdmin
          companyId={this.props.match.params.id} />
        <History
          companyId={this.props.match.params.id} />
      </div>
    )
  }
}

export default Company
