import React, {Component} from 'react';
import Formsy from 'formsy-react';
import FormInput from 'components/Interface/FormInput';
import 'airbnb-js-shims';
import Select from 'react-select';
import ReactTags from 'components/Interface/ReactTags/ReactTags';
import {Row, Col} from '../Grid';
import { countriesListAutocompleate, delimiters} from 'store/CountriesListAutoCompleate';

class Info extends Component{

  // FORM FUNCTIONS
  formInvalid = () => {
    this.setState({ formIsValid: false });
  }

  formValid = () => {
    this.setState({ formIsValid: true });
  }

  // submit handler from the form
  handleSubmit = (e) => {
    this.setState({isFormSubmitted: true})
    if ( this.state.formIsValid ){
      this.props.onFormSave()
      this.setState({isFormSubmitted: false}) // reset state here
    }
  }

  //input change
  handleChange = (e) => {
    let fieldName = e.target.name;
    let fleldVal = e.target.value;
    this.props.onInputChange(fieldName, fleldVal, this.props.group)
  }

  // select change
  handleSelectChange = (name, e) => {
    this.props.onSelectChange(name, e, this.props.group)
  }

  mapArrToSelect = (arr) => {
    return arr.map( x => {
      return { value: x, label: x }
    })
  }

  // tags

  // tags management
  handleTagsDelete = (i, e, name) => {
    this.setState({
      ...this.state,
      [name]: this.state[name].filter((tag, index) => index !== i),
    });
  }

  handleTagsAddition = (tag, name) => {
    let tagFilter = countriesListAutocompleate.filter(x => x.text === tag.text)[0]
    if (!tagFilter) return false

    this.setState(state => ({...this.state,
      [name]: [...state[name], tagFilter]
    }));
  }

  handleTagsDrag = (tag, currPos, newPos, name) => {
    const tags = [...this.state[name]];
    const newTags = tags.slice();

    newTags.splice(currPos, 1);
    newTags.splice(newPos, 0, tag);

    // re-render
    this.setState({
      ...this.state,
      [name]: newTags
    });
  }

  render(){

    const defaultInputProps = (name, placeholder) => ({
      onChangeHandler: this.handleChange,
      value: this.props.fields[name],
      name: name,
      label: placeholder,
      placeholder: placeholder
    })

    const defaultSelectProps = (name) => ({
      name: name,
      searchable: false,
      autosize: false,
      onChange: this.handleSelectChange.bind(this, name),
      value: this.props.fields[name],
      options: this.mapArrToSelect(selectValues[name])
    })

    const defaultTagProps = (name) => ({
      tags: this.props.fields[name],
      name: name,
      suggestions: countriesListAutocompleate,
      handleDelete: this.handleTagsDelete,
      handleAddition: this.handleTagsAddition,
      handleDrag: this.handleTagsDrag,
      delimiters: delimiters,
      autofocus: false,
      placeholder: "Select countries"
    })

    const selectValues = {
      paidUpCapital: [
        'Investment from local individual shareholder(s)',
        'Investment from foreign individual shareholder(s)',
        'Investment from local corporate shareholder(s)',
        'Investment from foreign corporate shareholder(s)',
        'Loans',
        'Others'
      ],
      relatedEntities: [
        "Yes", "No", "Not defined"
      ],
      otherBeneficiaries: [
        "Yes", "No", "Not defined"
      ],
      otherControllers: [
        "Yes", "No", "Not defined"
      ]
    }

    return(
      <Formsy
        onSubmit={this.handleSubmit}
        onValid={this.formValid}
        onInvalid={this.formInvalid} >
        <Row>
          <Col>
            <FormInput zIndex={1} {...defaultInputProps("companyName", "Company name")} />
          </Col>
          <Col>
            <FormInput zIndex={2} {...defaultInputProps("companyUEN", "UEN")} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput zIndex={3} {...defaultInputProps("registeredAddress", "Registered address")} />
          </Col>
          <Col>
            <FormInput zIndex={4} {...defaultInputProps("incorporationDate", "Incorporation date")} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput zIndex={5} {...defaultInputProps("businessActivity", "Primary business activity")} />
          </Col>
          <Col>
            <FormInput zIndex={6} {...defaultInputProps("operatingAddress", "Address of operating premise")} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput zIndex={7} {...defaultInputProps("annualRevenue", "Estimated annual revenue")} />
          </Col>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 8}}>
              <div className="ui-group__label">List of countries where the company's customers are located</div>
              { /* <Select
                {...defaultSelectProps("countriesCustomers")}
                placeholder="Select countries" /> */ }
              <ReactTags {...defaultTagProps("countriesCustomers")} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 9}}>
              <div className="ui-group__label">List of countries where the company's suppliers are located</div>
              <ReactTags {...defaultTagProps("countriesSuppliers")} />
            </div>
          </Col>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 10}}>
              <div className="ui-group__label">List of countries that the company is making payment to</div>
              <ReactTags {...defaultTagProps("countriesPaymentTo")} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 11}}>
              <div className="ui-group__label">List of countries that the company is receiving payment from</div>
              <ReactTags {...defaultTagProps("countriesPaymentFrom")} />
            </div>
          </Col>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 12}}>
              <div className="ui-group__label">Source of the company’s paid-up capital </div>
              <Select
                {...defaultSelectProps("paidUpCapital")}
                placeholder="Select" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 13}}>
              <div className="ui-group__label">Country or countries of origin for paid-up capital</div>
              <ReactTags {...defaultTagProps("paidUpCapitalOrigin")} />
            </div>
          </Col>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 14}}>
              <div className="ui-group__label">Does this company have any related entities?</div>
              <Select
                {...defaultSelectProps("relatedEntities")}
                placeholder="Select" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 15}}>
              <div className="ui-group__label">Other than the entities declared above, are there any other beneficiaries (?) (individual or corporate), parent companies, or subsidiaries?</div>
              <Select
                {...defaultSelectProps("otherBeneficiaries")}
                placeholder="Select" />
            </div>
          </Col>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 16}}>
              <div className="ui-group__label">Other than the stakeholders declared above, are there any other Registrable Controllers (?) for the company? </div>
              <Select
                {...defaultSelectProps("otherControllers")}
                placeholder="Select" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.props.fields.otherBeneficiaries.value === "Yes" &&
              <FormInput zIndex={17} {...defaultInputProps("otherBeneficiariesInput", "Please name the Beneficiaries")} />
            }
          </Col>
          <Col>
            {this.props.fields.otherControllers.value === "Yes" &&
              <FormInput zIndex={18} {...defaultInputProps("otherControllersInput", "Please name the Registrable Controller")} />
            }
          </Col>
        </Row>

        <div className="company__cta">
          <button
            className="btn btn--huge"
            type="submit">
            Save Changes
          </button>
        </div>
      </Formsy>
    )
  }
}

export default Info
