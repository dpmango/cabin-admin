import React, {Component} from 'react';
import SvgIcon from 'components/Helpers/SvgIcon';

class Thead extends Component{
  constructor(){
    super();
    this.state = {
      activeSortingCol: null,
      sortDirDESC: true
    }
  }

  sortCollumn = (id) => {
    const { sortDirDESC, activeSortingCol } = this.state;

    let sortDir = sortDirDESC;

    // double click change sorting direction
    if ( activeSortingCol === id ){
      sortDir = !sortDir
    }
    this.setState({
      activeSortingCol: id,
      sortDirDESC: sortDir
    })

    this.props.sortData(id, sortDir)
  }

  render(){
    const { rows } = this.props
    const { activeSortingCol, sortDirDESC } = this.state;

    return(
      <div className="table__head">
        <div className="table__row">
          {rows.map(x => (
            <div
              className={"table__cell" +
              (x.sortable ? " is-sortable" : "") +
              (activeSortingCol === x.id ? " is-active" : "") +
              (sortDirDESC ? " is-sorting-desc": "")}
              onClick={x.sortable ? this.sortCollumn.bind(this, x.id) : null}
              key={x.id}>
              {x.icon &&
                <div className="table__cell-icon">
                  <SvgIcon name={x.icon} />
                </div>
              }
              {x.name}
              {x.sortable &&
                <div className="table__caret">
                  <SvgIcon name="dropdown-arrow" />
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Thead
