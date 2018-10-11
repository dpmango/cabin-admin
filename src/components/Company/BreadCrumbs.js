import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import SvgIcon from 'components/Helpers/SvgIcon';

class BreadCrumbs extends Component{
  render(){
    const {crumbs} = this.props;

    return(
      <div className="breadcrumbs">
        <div className="container">
          <ul className="breadcrumbs__list">
            <li>
              <Link to="/companies">All Companies</Link>
              <SvgIcon name="arrow-right" />
            </li>
            {crumbs.map((x, i) => {
              // reuturn link free is last item
              if ( i === crumbs.length - 1 )
                return <li>{x.name}</li>

              return(
                <li>
                  <Link to={x.link}>{x.name}</Link>
                  <SvgIcon name="arrow-right" />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default BreadCrumbs
