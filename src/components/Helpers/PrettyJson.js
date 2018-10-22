import React, {Component} from 'react';
import syntaxHighlight from 'services/syntaxHighlight';
import {Collapse} from 'react-collapse';

class PrettyJson extends Component{
  constructor(){
    super();

    this.state ={
      isOpened: false
    }
  }

  prettyJson = (res) => {
    return syntaxHighlight(JSON.stringify(res, undefined, 2));
  }

  collapseToggler = () => {
    this.setState({
      isOpened: !this.state.isOpened
    })
  }

  render(){
    const {
      props: {data},
      state: {isOpened}
    } = this;

    if ( !data ) return null

    return(
      <div className="debugger">
        <button
          onClick={this.collapseToggler}
          className="btn btn--small">{isOpened ? "Hide" : "Show"} debug information</button>
        <Collapse isOpened={isOpened}>
          <code><pre dangerouslySetInnerHTML={{__html: this.prettyJson(data)}} /></code>
        </Collapse>
      </div>
    )
  }
}

export default PrettyJson
