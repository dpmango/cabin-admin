import React, {Component} from 'react'

class CompanyStatus extends Component {
  render(){
    const { el } = this.props

    if ( typeof(el) === "object" ){
      if ( el.isActive ){
        return <span className="badge badge--green">Active</span>
      } else if ( el.isPending ){
        return <span className="badge badge--red">Pending</span>
      } else if ( el.isInactive) {
        return <span className="badge badge--gray">Inactive</span>
      }

    } else {
      return el
    }
  }
}

export default CompanyStatus
