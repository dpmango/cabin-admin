import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import CompanyStatus from 'components/Company/CompanyStatus';
import moment from 'moment';

class Tbody extends Component{

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
                { y.text._isAMomentObject ?
                  <Fragment>{y.text.format("DD/MM/YYYY")}</Fragment>
                  :
                  <CompanyStatus el={y.text} />
                }
              </div>
            ))}
          </Link>
        ))}
      </div>
    )
  }
}

export default Tbody
