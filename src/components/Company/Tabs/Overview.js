import React, {Component, Fragment} from 'react';
import Formsy from 'formsy-react';
import FormInput from 'components/Interface/FormInput';
import 'airbnb-js-shims';
import Select from 'react-select';

class Overview extends Component{
  constructor(){
    super();

    this.category = "overview";
  }

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
      this.doSearch();
      this.setState({isFormSubmitted: false}) // reset state here
    }
  }

  //input change
  handleChange = (e) => {
    let fieldName = e.target.name;
    let fleldVal = e.target.value;
    this.props.onInputChange(fieldName, fleldVal, this.category)
  }

  // select change
  handleSelectChange = (name, e) => {
    this.props.onSelectChange(name, e, this.category)
  }

  mapArrToSelect = (arr) => {
    return arr.map( x => {
      return { value: x, label: x }
    })
  }

  render(){
    const {shortName, UEN, corporateSecretary} = this.props;
    const defaultInputProps = {
      onChangeHandler: this.handleChange
    }

    const selectValues = {
      corporateSecretary: [
        "Yes", "No", "Not defined"
      ]
    }

    return(
      <Formsy
        onSubmit={this.handleSubmit}
        onValid={this.formValid}
        onInvalid={this.formInvalid} >
        <div className="company__row">
          <div className="company__col">
            <FormInput
              {...defaultInputProps}
              label="Short name"
              name="shortName"
              placeholder=""
              value={shortName} />
          </div>
          <div className="company__col">
            <FormInput
              {...defaultInputProps}
              label="Company Code"
              name="UEN"
              placeholder=""
              value={UEN} />
          </div>
        </div>
        <div className="company__row">
          <div className="company__col">
            <div className="ui-group">
              <Select
                name="corporateSecretary"
                searchable={false}
                autosize={false}
                value={corporateSecretary}
                onChange={this.handleSelectChange.bind(this, 'corporateSecretary')}
                placeholder="Which industry are you in?"
                options={this.mapArrToSelect(selectValues.corporateSecretary)}
              />
            </div>
          </div>
        </div>

      </Formsy>
    )
  }
}

export default Overview
