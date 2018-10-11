import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Search from './Header/Search';
import Notifications from './Header/Notifications';
import User from './Header/User';

class Header extends Component {

  render(){
    return(
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <Link
              to="/companies"
              className="header__logo">
              <i className="icon icon-cabin-logo"></i>
            </Link>
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
