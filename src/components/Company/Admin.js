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
        overview: {
          shortName: "",
          UEN: ""
        }
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
      fields: {...this.state.fields,
        [cat]: {
          ...this.state.fields[cat],
          [name]: value
        }
      }
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
        component: <Overview
          shortName={this.state.fields.overview.shortName}
          UEN={this.state.fields.overview.UEN}
          onInputChange={this.handleChange} />
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
