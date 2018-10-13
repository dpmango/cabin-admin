import React, {Component} from 'react';
import Formsy from 'formsy-react';
import FormInput from 'components/Interface/FormInput';
import 'airbnb-js-shims';
import Select from 'react-select';
import {Row, Col} from '../Grid';

class Overview extends Component{

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

    const selectValues = {
      corporateSecretary: [
        "Yes", "No", "Not defined"
      ],
      accountingType: [
        "Monthly"
      ],
      status: [
        "Pending", "Active", "Inactive"
      ],
      actionNeeded: [
        "Action 1", "Action 2"
      ]
    }

    return(
      <Formsy
        onSubmit={this.handleSubmit}
        onValid={this.formValid}
        onInvalid={this.formInvalid} >
        <Row>
          <Col>
            <FormInput zIndex={1} {...defaultInputProps("shortName", "Short name")} />
          </Col>
          <Col>
            <FormInput zIndex={2} {...defaultInputProps("UEN", "Company Code")} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 3}}>
              <div className="ui-group__label">Corporate Secretary</div>
              <Select
                {...defaultSelectProps("corporateSecretary")}
                placeholder="Corporate Secretary" />
            </div>
          </Col>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 4}}>
              <div className="ui-group__label">Accounting</div>
              <Select
                {...defaultSelectProps("accountingType")}
                placeholder="Accounting" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput zIndex={5} {...defaultInputProps("secretaryName", "Company Secretary name")} />
          </Col>
          <Col>
            <FormInput zIndex={6} {...defaultInputProps("secretaryid", "Company Secretary ID")} />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 7}}>
              <div className="ui-group__label">Status</div>
              <Select
                {...defaultSelectProps("status")}
                placeholder="Status" />
            </div>
          </Col>
          <Col>
            <div className="ui-group" style={{zIndex: 100 - 8}}>
              <div className="ui-group__label">Action Needed</div>
              <Select
                {...defaultSelectProps("actionNeeded")}
                placeholder="Action Needed" />
            </div>
          </Col>
        </Row>
        <FormInput
          zIndex={9}
          {...defaultInputProps("notes", "Notes")}
          type="textarea" />
        <Row>
          <Col>
            <FormInput zIndex={10} {...defaultInputProps("addressLine1", "Company address line 1")} />
          </Col>
          <Col>
            <FormInput zIndex={11} {...defaultInputProps("addressLine2", "Company address line 2")} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput zIndex={12} {...defaultInputProps("addressPostal", "Company address postal code")} />
          </Col>
          <Col>
            <FormInput zIndex={13} {...defaultInputProps("representativeName", "Company representative name")} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput zIndex={14} {...defaultInputProps("representativeId", "Company representative ID")} />
          </Col>
          <Col>
            <FormInput zIndex={15} {...defaultInputProps("representativeDesignation", "Company representative designation")} />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput zindex={16} {...defaultInputProps("representativeEmail", "Company representative email")} />
          </Col>
          <Col>
            <FormInput zIndex={17} {...defaultInputProps("representativePhone", "Company representative contact number")} />
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

export default Overview
