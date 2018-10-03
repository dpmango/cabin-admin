import React, {Component} from 'react';

class Tbody extends Component{
  renderCellText = (el) => {
    if ( typeof(el) === "object" ){
      if ( el.isActive ){
        return <span class="badge badge--green">Active</span>
      } else if ( el.isPending ){
        return <span className="badge badge--red">Pending</span>
      } else if ( el.isInactive) {
        return <span className="badge badge--gray">Inactive</span>
      }
    } else {
      return el
    }
  }
  
  render(){
    const { rows } = this.props

    return(
      <div className="table__body">
        {[1,2,3].map(a => (rows.map(x => (
          <div
            className="table__row"
            key={x.id}>
            {x.cells.map(y => (
              <td
                className="table__cell"
                key={y.id}>
                {this.renderCellText(y.text)}
              </td>
            ))}
          </div>
        ))))}
      </div>
    )
  }
}

export default Tbody
