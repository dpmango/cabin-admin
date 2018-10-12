import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import CompanyStatus from 'components/Company/CompanyStatus';

class Tbody extends Component{

  render(){
    const { rows } = this.props

    return(
      <div className="table__body">
        {[1,2,3].map(a => (rows.map(x => (
          <Link
            to={`/company/${x.id}`}
            className="table__row"
            key={x.id}>
            {x.cells.map(y => (
              <td
                className="table__cell"
                key={y.id}>
                <CompanyStatus el={y.text} />
              </td>
            ))}
          </Link>
        ))))}
      </div>
    )
  }
}

export default Tbody
