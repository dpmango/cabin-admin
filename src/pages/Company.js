import React, {Component} from 'react';
import Header from 'components/Shared/Header';
import Footer from 'components/Shared/Footer';
import CompanyAdmin from 'components/Company/Admin';

class Company extends Component{
  render(){
    return(
      <div className="admin">
        <Header />
        <CompanyAdmin
          companyId={this.props.match.params.id} />
        <Footer />
      </div>
    )
  }
}

export default Company
