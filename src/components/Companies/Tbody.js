import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import StatusBadge from 'components/Company/StatusBadge';

class Tbody extends Component{
  renderCell = (y) => {
    // render status if status
    if (y.id === 8)
      return <StatusBadge status={y.text} />

    if ( y.text && y.text._isAMomentObject )
      return y.text.format("DD/MM/YYYY")

    return y.text
  }

  render(){
    const { rows } = this.props

    return(
      <div className="table__body">
        {rows.map(x => (
          <Link
            to={`/company/${x.id}`}
            className={"table__row" +
            (x.isSeekingAttention ? " is-seeking-attention" : "")}
            key={x.id}>
            {x.cells.map(y => (
              <div
                className="table__cell"
                key={y.id}>
                {this.renderCell(y)}
              </div>
            ))}
          </Link>
        ))}
      </div>
    )
  }
}

export default Tbody
