import React, {Component} from 'react';
import Header from 'components/Shared/Header';
import History from 'components/Company/History';
import CompanyAdmin from 'components/Company/Admin';

class Company extends Component{
  render(){
    const companyId = this.props.match.params.id

    return(
      <div className="admin">
        <Header />
        <div className="page-wrap">
          <CompanyAdmin
            companyId={companyId} />
          <History
            companyId={companyId} />
        </div>
      </div>
    )
  }
}

export default Company
