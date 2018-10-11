import React, {Component} from 'react';
import Formsy from 'formsy-react';
import FormInput from 'components/Interface/FormInput';
import CheckBox from 'components/Interface/CheckBox';

class AdvancedSearch extends Component {
  constructor(){
    super()

    this.state = {
      matchingWords: '',
      isCorporateSecretary: null,
      accountingType: [],
      status: []
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

  // click handler for the button
  submitForm = () => {
    this.formRef.current.submit();
  }

  // inputs
  handleChange = (e) => {
    let fieldName = e.target.name;
    let fleldVal = e.target.value;
    this.setState({...this.state, [fieldName]: fleldVal});
  }

  // checkbox
  toggleCheckBox = (name, val) => {
    // when checkbox is toggled first time
    let result = this.state[name] === null ? val : !this.state[name]

    this.setState({
      ...this.state,
      [name]: result
    })
  }

  // checkbox with multiple options
  checkBoxSelector = (name, id) => {
    const options = this.state[name]
    let index

    if (options.indexOf(id) === -1) {
     options.push(id)
    } else {
     index = options.indexOf(id)
     options.splice(index, 1)
    }

    this.setState({
      [name]: options
    })
  }


  // api functions
  doSearch = () => {
    alert('search - TODO')
  }


  render(){
    const {
      state: {matchingWords, isCorporateSecretary, accountingType, status}
    } = this

    return(
      <div className="header-search__advanced adv-search">
        <Formsy
          onSubmit={this.handleSubmit}
          onValid={this.formValid}
          onInvalid={this.formInvalid} >
          <div className="adv-search__top">
            <FormInput
              label="Containing words"
              name="matchingWords"
              placeholder=""
              value={matchingWords}
              onChangeHandler={this.handleChange} />
          </div>
          <div className="adv-search__row">
            <div className="adv-search__col">
              <div className="adv-search__col-title">Corporate Secretary</div>
              <CheckBox
                name="isCorporateSecretary"
                isActive={isCorporateSecretary === true}
                text="Yes"
                clickHandler={this.toggleCheckBox.bind(this, "isCorporateSecretary", true)} />
              <CheckBox
                name="isCorporateSecretary"
                isActive={isCorporateSecretary === false}
                text="No"
                clickHandler={this.toggleCheckBox.bind(this, "isCorporateSecretary", false)} />
            </div>
            <div className="adv-search__col">
              <div className="adv-search__col-title">Accounting</div>
              <CheckBox
                name="accountingType"
                isActive={accountingType.indexOf(1) !== -1}
                text="Monthly"
                clickHandler={this.checkBoxSelector.bind(this, "accountingType", 1)} />
              <CheckBox
                name="accountingType"
                isActive={accountingType.indexOf(2) !== -1}
                text="Annual"
                clickHandler={this.checkBoxSelector.bind(this, "accountingType", 2)} />
              <CheckBox
                name="accountingType"
                isActive={accountingType.indexOf(3) !== -1}
                text="None"
                clickHandler={this.checkBoxSelector.bind(this, "accountingType", 3)} />
            </div>
          </div>
          <div className="adv-search__row">
            <div className="adv-search__col">
              <div className="adv-search__col-title">Status</div>
              <CheckBox
                name="status"
                isActive={status.indexOf(1) !== -1}
                text="Active"
                clickHandler={this.checkBoxSelector.bind(this, "status", 1)} />
              <CheckBox
                name="status"
                isActive={status.indexOf(2) !== -1}
                text="Pending"
                clickHandler={this.checkBoxSelector.bind(this, "status", 2)} />
            </div>
            <div className="adv-search__col">
              <div className="adv-search__col-title"></div>
              <CheckBox
                name="status"
                isActive={status.indexOf(3) !== -1}
                text="Inactive"
                clickHandler={this.checkBoxSelector.bind(this, "status", 3)} />
            </div>
          </div>
          <div className="adv-search__buttons">
            <button
              onClick={this.backClick}
              className="btn btn--small btn-gray">Back</button>
            <button
              type="submit"
              className="btn btn--small">Search</button>
          </div>
        </Formsy>
      </div>
    )
  }
}

export default AdvancedSearch
