import React, {Component, Fragment} from 'react';
import Formsy from 'formsy-react';
import FormInput from 'components/Interface/FormInput';

class Overview extends Component{
  constructor(){
    super();

    this.category = "overview";

    this.state = {

    }
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

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fleldVal = e.target.value;
    this.props.onInputChange(fieldName, fieldName, this.category)
  }

  render(){
    const {shortName, UEN} = this.props;
    const defaultInputProps = {
      onChangeHandler: this.handleChange
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

      </Formsy>
    )
  }
}

export default Overview
