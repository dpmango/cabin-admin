import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import Image from 'components/Helpers/Image';
import Dropdown from 'components/Interface/DropDown';
import {logOut} from 'actions/user';

class User extends Component{
  render(){
    return(
      <div className="header__user header-user">
        <div className="avatar">
          <Image file="rifeng-avatar.png" />
        </div>
        <Dropdown
          extraClass="header-user__toggle">
          <div className="dropdown__menu">
            <li
              onClick={this.props.logOut}
              className="dropdown__menu-item">Log Out</li>
          </div>
        </Dropdown>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOut())
})

export default connect(null, mapDispatchToProps)(User);
