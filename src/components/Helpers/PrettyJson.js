import React, {Component} from 'react';
import syntaxHighlight from 'services/syntaxHighlight';

class PrettyJson extends Component{

  prettyJson = (res) => {
    return syntaxHighlight(JSON.stringify(res, undefined, 2));
  }

  render(){
    const {data} = this.props;

    if ( !data ) return null

    return(
      <code><pre dangerouslySetInnerHTML={{__html: this.prettyJson(data)}} /></code>
    )
  }
}

export default PrettyJson
