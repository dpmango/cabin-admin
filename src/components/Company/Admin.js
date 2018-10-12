import React, {Component} from 'react';
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
        corporateSecretary: "",
        accountingType: "",
        secretaryName: "",
        secretaryid: "",
        status: "",
        actionNeeded: "",
        notes: "",
        addressLine1: "",
        addressLine2: "",
        addressPostal: "",
        representativeName: "",
        representativeId: "",
        representativeDesignation: "",
        representativeEmail: "",
        representativePhone: ""
      },
      info: {
        companyName: "",
        companyUEN: "",
        registeredAddress: "",
        incorporationDate: "",
        businessActivity: "",
        operatingAddress: "",
        annualRevenue: "",
        countriesCustomers: "",
        countriesSuppliers: "",
        countriesPaymentTo: "",
        countriesPaymentFrom: "",
        paidUpCapital: "",
        paidUpCapitalOrigin: "",
        relatedEntities: "",
        otherBeneficiaries: "",
        otherControllers: "",
        otherBeneficiariesInput: "",
        otherControllersInput: ""
      },
      stakeholders: {

      },
      shareholders: {

      }
    }
  }

  componentDidMount(){
    this.getCompanyData();
  }

  componentDidUpdate(){
    // console.log('admin updated', this.state)
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

  saveForm = () => {
    // TODO - some API things ?
  }

  render(){
    const {
      state: {name, status, activeTab},
      props: {companyId}
    } = this;


    const defaultComponentProps = (group) => ({
      onFormSave: this.saveForm,
      onInputChange: this.handleChange,
      onSelectChange: this.handleChange,
      group: group,
      fields: this.state[group]
    })

    const tabs = [{
      nav: {
        id: 1, name: "Overview"
      },
      component: <Overview {...defaultComponentProps("overview")} />
    }, {
      nav: {
        id: 2, name: "Company info"
      },
      component: <Info {...defaultComponentProps("info")} />
    }, {
      nav: {
        id: 3, name: "Stakeholders info"
      },
      component: <StakeHolders {...defaultComponentProps("stakeholders")} />
    }, {
      nav: {
        id: 4, name: "Shareholding Structure"
      },
      component: <ShareHolders {...defaultComponentProps("shareholders")} />
    }]

    return(
      <div className="company">
        <BreadCrumbs
          crumbs={[{
            name: name
          }]}/>
        <CompanyHeader
          name={name}
          companyId={companyId}
          status={status}
          activeTab={activeTab}
          tabs={tabs.map(x => x.nav)}
          onTabSelected={this.changeTab}/>
        <div className="company__tabs">
          {tabs.map(tab => (
            <div
              key={tab.nav.id}
              className={"company__tab" + (activeTab === tab.nav.id ? " is-active" : "")}>
              <div className="container">
                {tab.component}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Admin
