import React from 'react';

export const Row = (props) => {
  return(
    <div className="company__row">
      {props.children}
    </div>
  )
}

export const Col = (props) => {
  return(
    <div className="company__col">
      {props.children}
    </div>
  )
}
