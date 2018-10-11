import React, {Component} from 'react';
import SvgIcon from 'components/Helpers/SvgIcon';

class Notifications extends Component{
  constructor(){
    super()

    this.state = {
      counter: 2,
      notifications: []
    }
  }

  render(){
    const {
      state: {counter, notifications}
    } = this;

    return(
      <div className="header__notifications header-notifications">
        <div className="header-notifications__icon">
          <SvgIcon name="bell" />
        </div>
        <div className="header-notifications__counter">
          <span>{counter}</span>
        </div>
      </div>
    )
  }
}

export default Notifications
