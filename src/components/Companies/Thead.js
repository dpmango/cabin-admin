import React, {Component} from 'react';
import SvgIcon from 'components/Helpers/SvgIcon';

class Thead extends Component{
  constructor(){
    super();
    this.state = {
      activeSortingCol: 0,
      sortDirDESC: false
    }
  }

  sortCollumn = (index) => {
    const { sortDirDESC, activeSortingCol } = this.state;

    let sortDir = sortDirDESC;

    // double click change sorting direction
    if ( activeSortingCol === index ){
      sortDir = !sortDir
    }
    this.setState({
      activeSortingCol: index,
      sortDirDESC: sortDir
    })

    this.props.sortData(index, sortDir)
  }

  render(){
    const { rows } = this.props
    const { activeSortingCol, sortDirDESC } = this.state;

    return(
      <div className="table__head">
        <div className="table__row">
          {rows.map(x => (
            <div
              className={"table__cell " + (activeSortingCol === x.id ? "is-active" : "") + (sortDirDESC ? " is-sorting-desc": "")}
              onClick={this.sortCollumn.bind(this, x.id)}
              key={x.id}>
              {x.icon &&
                <SvgIcon name={x.icon ? x.icon : "check"} />
              }
              {x.name}
              {x.sortable &&
                <div className="table__caret">
                  <SvgIcon name="check" />
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
