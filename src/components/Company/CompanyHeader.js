import React, {Component} from 'react';
import CompanyStatus from 'components/Company/CompanyStatus';

class CompanyHeader extends Component {
  renderStatus = (st) => {
    let el = {
      isActive: null,
      isPending: null,
      isInactive: null
    }

    if ( st === "Active".toLowerCase() ){
      el.isActive = true
    } else if ( st === "Pending".toLowerCase() ){
      el.isPending = true
    } else if ( st === "Inactive".toLowerCase() ) {
      el.isInactive = true
    }

    return el
  }

  render(){
    const {name, status, tabs, activeTab} = this.props
    return(
      <div className="company__header company-header">
        <div className="container">
          <div className="company-header__info">
            <div className="company-header__name">{name}</div>
            <div className="company-header__status"><CompanyStatus el={this.renderStatus(status)} /></div>
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
