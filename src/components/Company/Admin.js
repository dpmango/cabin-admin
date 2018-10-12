import React, {Component, Fragment} from 'react';
import CompanyHeader from './CompanyHeader';
import BreadCrumbs from './BreadCrumbs';
import Overview from './Tabs/Overview';
import Info from './Tabs/Info';
import StakeHolders from './Tabs/StakeHolders';
import ShareHolders from './Tabs/ShareHolders';

class Admin extends Component{
  constructor(){
    super()

    this.state = {
      activeTab: 1,
      name: "ACME Company LTE",
      status: "pending",
      overview: {
        shortName: "",
        UEN: "",
        corporateSecretary: ""
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

  // child component change functions
  handleChange = (name, value, cat) => {
    this.setState({...this.state,
      [cat]: {
        ...this.state[cat],
        [name]: value
      }
    })
  }

  // onSelectChange = (name, value, cat) => {
  //   this.setState({...this.state,
  //     [cat]: {
  //       ...this.state[cat],
  //       [name]: value
  //     }
  //   })
  // }

  render(){
    const {
      state: {name, status, activeTab},
      props: {companyId}
    } = this;

    const defaultComponentProps = {
      onInputChange: this.handleChange,
      onSelectChange: this.handleChange
    }

    const tabs = [
      {
        nav: {
          id: 1,
          name: "Overview"
        },
        component: <Overview
          {...defaultComponentProps}
          shortName={this.state.overview.shortName}
          UEN={this.state.overview.UEN}
          corporateSecretary={this.state.overview.corporateSecretary} />
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
                key={tab.nav.id}>
                <div
                  className={"company__tab" + (activeTab === tab.nav.id ? " is-active" : "")}>
                  <div className="container">
                    {tab.component}
                  </div>
                </div>
              </Fragment>
            ))}
          </div>

        </div>
      </div>
    )
  }
}

export default Admin
