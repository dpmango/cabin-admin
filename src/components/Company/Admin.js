import React, {Component, Fragment} from 'react';
import CompanyHeader from './CompanyHeader';
import BreadCrumbs from './BreadCrumbs';
import Overview from './Overview';
import Info from './Info';
import StakeHolders from './StakeHolders';
import ShareHolders from './ShareHolders';

class Admin extends Component{
  constructor(){
    super()

    this.state = {
      activeTab: 1,
      name: "ACME Company LTE",
      status: "pending",
      fields: {

      }
    }
  }

  componentDidMount(){
    this.getCompanyData();
  }

  getCompanyData = () => {

  }

  changeTab = (id) => {
    this.setState({
      activeTab: id
    })
  }

  render(){
    const {
      state: {name, status, activeTab},
      props: {companyId}
    } = this;

    const tabs = [
      {
        nav: {
          id: 1,
          name: "Overview"
        },
        component: Overview
      },
      {
        nav: {
          id: 2,
          name: "Company info"
        },
        component: Info
      },
      {
        nav: {
          id: 3,
          name: "Stakeholders info"
        },
        component: StakeHolders
      },
      {
        nav: {
          id: 4,
          name: "Shareholding Structure"
        },
        component: ShareHolders
      }
    ]

    return(
      <div className="page-wrap">
        <div className="company">
          <BreadCrumbs
            crumbs={[{
              name: name
            }]}/>
          <CompanyHeader
            name={name}
            status={status}
            activeTab={activeTab}
            tabs={tabs.map(x => x.nav)}
            onTabSelected={this.changeTab}/>
          <div className="company__tabs">
            {tabs.map(tab => (
              <Fragment
                activeTab={activeTab}
                key={tab.nav.id}>
                {tab.component}
              </Fragment>
            ))}
          </div>

        </div>
      </div>
    )
  }
}

export default Admin
