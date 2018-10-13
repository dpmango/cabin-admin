import React, {Component} from 'react';
import StatusBadge from 'components/Company/StatusBadge';

class CompanyHeader extends Component {
  render(){
    const {name, status, tabs, activeTab} = this.props
    return(
      <div className="company__header company-header">
        <div className="container">
          <div className="company-header__info">
            <div className="company-header__name">{name}</div>
            <div className="company-header__status">
              <StatusBadge status={status} />
            </div>
          </div>
          <div className="company-header__tabs">
            {tabs.map(tab => (
              <div
                key={tab.id}
                onClick={this.props.onTabSelected.bind(this, tab.id)}
                className={"company-header__tab" + (activeTab === tab.id ? " is-active" : "")}>
                {tab.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyHeader;
