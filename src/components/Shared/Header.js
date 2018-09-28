import React, {Component} from 'react';
import Search from './Header/Search';
import Notifications from './Header/Notifications';
import User from './Header/User';

class Header extends Component {

  render(){
    return(
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__logo">
              <i className="icon icon-cabin-logo"></i>
            </div>
            <Search />
            <Notifications />
            <User />
          </div>
        </div>
      </div>
    )
  }
}

export default Header;
