import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Formsy from 'formsy-react';
import { connect } from 'react-redux';
import FormInput from 'components/Interface/FormInput';
import { loginRequest, clearAuthError } from 'actions/user';

class Login extends Component{
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }

    this.formRef = React.createRef();
  }

  componentDidMount(){
    this.props.clearError()
  }

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
      this.loginUser();
      this.setState({isFormSubmitted: false}) // reset state here
    }
  }

  // click handler for the button
  submitForm = () => {
    this.formRef.current.submit();
  }

  handleChange = (e) => {
    let fieldName = e.target.name;
    let fleldVal = e.target.value;
    this.setState({...this.state, [fieldName]: fleldVal});

    if ( this.props.loginError ){
      this.props.clearError()
    }
  }

  keyPressHandler = (e) => {
    if ( e.key === "Enter" ){
      // this.submitForm();
    }
  }

  // auth passed to redux
  loginUser = () => {
    const { email, password } = this.state;

    this.props.logIn({
      email, password
    });
  }

  render(){
    const {
      state: {
        email, password
      },
      props: {
        loginError, user
      }
    } = this

    if ( user.auth_token && user.user_id ){
      return <Redirect to="/companies" />
    }

    return(
      <div className="login">
        <div className="container">
          <Formsy
            className="login__form"
            onSubmit={this.handleSubmit}
            onValid={this.formValid}
            onInvalid={this.formInvalid}
            ref={this.formRef}
          >
            {loginError &&
              <div className="ui-group ui-group--row">
                <label htmlFor=""></label>
                <div className="ui-error-message">{loginError}</div>
              </div>
            }
            <i className="icon icon-cabin-logo"></i>
            <FormInput
              name="email"
              placeholder="E–mail"
              value={email}
              validations="isEmail"
              validationErrors={{
                isEmail: "Email is invalid",
                isDefaultRequiredValue: 'Please fill email'
              }}
              onChangeHandler={this.handleChange}
              onKeyHandler={this.keyPressHandler}
              required />
            <FormInput
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              validationErrors={{
                isDefaultRequiredValue: 'Please fill password'
              }}
              onChangeHandler={this.handleChange}
              onKeyHandler={this.keyPressHandler}
              required />
            <div className="login__cta">
              <button className="btn btn--huge" type="submit">Login</button>
            </div>
          </Formsy>
        </div>
      </div>
    )
  }
}


Login.propTypes = {
  logIn: PropTypes.func,
  openModal: PropTypes.func,
  closeModal: PropTypes.func
}

const mapStateToProps = (state) => ({
  login_error: state.user.loginError,
  user: state.user
});

const mapDispatchToProps = (dispatch) => ({
  logIn: (data) => dispatch(loginRequest(data)),
  clearError: () => dispatch(clearAuthError())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
