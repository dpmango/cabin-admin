import React from 'react'

const StatusBadge = (props) => {
  const { status } = props // pending is default, active/inactive posible values

  if ( !status ){
    return null
  }
  
  if ( status === 1 ){
    return <span className="badge badge--red">Pending</span>
  } else if ( status === 2 ){
    return <span className="badge badge--green">Active</span>
  } else if ( status === 3 ) {
    return <span className="badge badge--gray">Inactive</span>
  }

}

export default StatusBadge
