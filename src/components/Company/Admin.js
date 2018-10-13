import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Helmet } from "react-helmet";
import { notify } from 'reapop';
import api from 'services/Api';
import PrettyJson from 'components/Helpers/PrettyJson';
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
      notFound: null, // required for redirect
      responce: null, // testing pruposes only
      activeTab: 1,
      name: "",
      status: null, // default
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
        countriesCustomers: [
          // {"id": "SG", "text": "Singapore"}
        ],
        countriesSuppliers: [],
        countriesPaymentTo: [],
        countriesPaymentFrom: [],
        paidUpCapital: "",
        paidUpCapitalOrigin: [],
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
    const {companyId} = this.props

    api
      .get(`onboardings/${companyId}`)
      .then(res => {
        // res.data
        this.setState({
          responce: res.data, // testing obj holding all data
          name: res.data.company_name,
          status: res.data.a_status,
          overview: {
            shortName: res.data.a_shortname,
            UEN: res.data.a_companycode,
            corporateSecretary: res.data.a_corpsecretary,
            accountingType: res.data.a_accounting,
            secretaryName: res.data.a_corpsecretary_name,
            secretaryid: res.data.a_corpsecretary_id,
            status: res.data.a_status,
            actionNeeded: res.data.a_action,
            notes: res.data.a_notes,
            addressLine1: res.data.a_companyaddress1,
            addressLine2: res.data.a_companyaddress2,
            addressPostal: res.data.a_companypostal,
            representativeName: res.data.name,
            representativeId: "", // TODO ??
            representativeDesignation: res.data.designation,
            representativeEmail: res.data.email,
            representativePhone: res.data.phone
          },
          info: {
            companyName: res.data.company_name,
            companyUEN: res.data.company_uen,
            registeredAddress: res.data.a_acra_address,
            incorporationDate: res.data.a_acra_incorporationdate,
            businessActivity: res.data.company_activity,
            operatingAddress: res.data.company_addres,
            annualRevenue: res.data.company_revenue,
            countriesCustomers: this.backConvertTagsList(res.data.consumers_list),
            // [
            //   // {"text": "Afghanistan", "id": "AF"}
            //   {"id": "SG", "text": "Singapore"}
            // ],
            countriesSuppliers: this.backConvertTagsList(res.data.suppliers_list),
            countriesPaymentTo: this.backConvertTagsList(res.data.payments_to_list),
            countriesPaymentFrom: this.backConvertTagsList(res.data.payments_from_list),
            paidUpCapital: res.data.paidup_capital,
            paidUpCapitalOrigin: this.backConvertTagsList(res.data.paidup_capital_origins),
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
        })
      })
      .catch(err => {
        console.log(`error on GET onboarding id ${companyId}`, err)
        this.setState({
          notFound: true
        })
      })
  }

  // CONVERTING functions
  // as the backend store data in string/text format mostly,
  // and some components requiore arrays or objects
  convertTagsToBackend = (data) => {
    return data.map(x => `(${x.id}) ${x.text}`).join(', ')
  }

  backConvertTagsList = (data) => {
    if ( !data ) return [] // need empty array to prevent .map error

    return data.split(', ').map(x => ({
      id: x.substring(1,3), text: x.substring(5)
    }))
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

  // SAVE STATE TO API (saves all tabs at once)
  saveForm = () => {
    const {companyId} = this.props

    const patchObj = {
      // fields used to set state onMount is reversed now
      onboarding: {
        id: companyId,
        company_name: this.state.name,
        a_status: this.state.status,
        //overview section
        a_shortname: this.state.overview.shortName,
        a_companycode: this.state.overview.UEN,
        a_corpsecretary: this.state.overview.corporateSecretary,
        a_accounting: this.state.overview.accountingType,
        a_corpsecretary_name: this.state.overview.secretaryName,
        a_corpsecretary_id: this.state.overview.secretaryid,
        a_status: this.state.overview.status,
        a_action: this.state.overview.actionNeeded,
        a_notes: this.state.overview.notes,
        a_companyaddress1: this.state.overview.addressLine1,
        a_companyaddress2: this.state.overview.addressLine2,
        a_companypostal: this.state.overview.addressPostal,
        name: this.state.overview.representativeName,
        // representativeId: "", // TODO ??
        designation: this.state.overview.representativeDesignation,
        email: this.state.overview.representativeEmail,
        phone:  this.state.overview.representativePhone,

        //info section
        company_name: this.state.info.companyName,
        company_uen: this.state.info.companyUEN,
        a_acra_address: this.state.info.registeredAddress,
        a_acra_incorporationdate: this.state.info.incorporationDate,
        company_activity: this.state.info.businessActivity,
        company_addres: this.state.info.operatingAddress,
        company_revenue: this.state.info.annualRevenue,
        consumers_list: this.convertTagsToBackend(this.state.info.countriesCustomers),
        suppliers_list: this.convertTagsToBackend(this.state.info.countriesSuppliers),
        payments_to_list: this.convertTagsToBackend(this.state.info.countriesPaymentTo),
        payments_from_list: this.convertTagsToBackend(this.state.info.countriesPaymentFrom),
        paidup_capital: this.state.paidup_capital,
        paidup_capital_origins: this.convertTagsToBackend(this.state.info.paidUpCapitalOrigin),
        // info: {
        //   relatedEntities: "",
        //   otherBeneficiaries: "",
        //   otherControllers: "",
        //   otherBeneficiariesInput: "",
        //   otherControllersInput: ""
        // },
        // stakeholders: {
        //
        // },
        // shareholders: {
        //
        // }
      }
    }

    api
      .patch(`onboardings/${companyId}`, patchObj)
      .then(res => {
        this.setState({
          responce: res.data
        }, () => {
          this.props.notify({
            title: 'Saved Successfully',
            message: 'Great, Сompany info is saved',
            status: 'default', // default, info, success, warning, error
            dismissible: true,
            dismissAfter: 2000,
          })
        })
      })
      .catch(err => {
        console.log('Error on PATCH Onboardings', err)

        this.props.notify({
          title: 'Error!',
          message: 'Whoops, something wrong saving this Company',
          status: 'default', // default, info, success, warning, error
          dismissible: true,
          dismissAfter: 2000,
        })

      })
  }

  render(){
    const {
      state: {notFound, name, status, activeTab, responce},
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

    if ( notFound ){
      return <Redirect to="/404" />
    }

    return(
      <div className="company">
        <Helmet>
          <title>{name} :: Cabin admin</title>
        </Helmet>
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
            <div
              key={tab.nav.id}
              className={"company__tab" + (activeTab === tab.nav.id ? " is-active" : "")}>
              <div className="container">
                {tab.component}
              </div>
            </div>
          ))}
        </div>

        <div className="container">
          <PrettyJson data={responce} />
        </div>

      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  notify: (data) => dispatch(notify(data))
})

export default connect(null, mapDispatchToProps)(Admin)
