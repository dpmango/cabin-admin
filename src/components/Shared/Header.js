import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import throttle from 'lodash/throttle';
import Search from './Header/Search';
import Notifications from './Header/Notifications';
import User from './Header/User';

class Header extends Component {
  constructor(){
    super()

    this.state = {
      isScrolled: false
    }

    this.scrollWithThrottle = throttle(this.handleScroll, 200);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollWithThrottle, false);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollWithThrottle, false);
  };

  handleScroll = (event) => {
    var wScroll = window.scrollY

    if ( wScroll > 10 ){
      this.setState({
        isScrolled: true
      })
    } else {
      if ( this.state.isScrolled ){
        this.setState({
          isScrolled: false
        })
      }

    }
  };

  render(){
    const { isScrolled } = this.state;

    return(
      <div className={"header" + (isScrolled ? ' is-scrolled' : '')}>
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
