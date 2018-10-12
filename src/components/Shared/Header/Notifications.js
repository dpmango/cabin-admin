import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import SvgIcon from 'components/Helpers/SvgIcon';
import Dropdown from 'components/Interface/DropDown';

class Notifications extends Component{
  constructor(){
    super()

    this.fakeNotifications = [
      {id: 1, content: "Verify ACRA statement for ACME Company LTE"},
      {id: 2, content: "Verify Stakeholders for ACME Company LTE"},
      {id: 3, content: "Verify ACRA statement for ACME Company LTE ACME Com"},
      {id: 4, content: "Send yearly confirmation for ACME Company LTE"}
    ]

    this.state = {
      counter: 2,
      notifications: this.fakeNotifications
    }
  }

  NotificationToggle = () => (
    <Fragment>
      <div className="header-ntf__icon">
        <SvgIcon name="bell" />
      </div>
      <div className="header-ntf__counter">
        <span>{this.state.counter}</span>
      </div>
    </Fragment>
  )

  render(){
    const {notifications} = this.state;

    return(
      <Dropdown
        hideOnMenuClick={true}
        extraClass="header__notifications header-ntf"
        toggleComponent={this.NotificationToggle()}>
        <div className="dropdown__menu">
          {notifications.map(x => (
            <Link
              key={x.id}
              to={`/company/${x.id}`}
              className="dropdown__menu-item">
              {x.content}
            </Link>
          ))}
        </div>
      </Dropdown>
    )
  }
}

export default Notifications
