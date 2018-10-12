import React, {Component} from 'react';

class History extends Component{
  constructor(){
    super();

    this.state = {
      history: []
    }
  }

  componentDidMount(){
    this.getHistory();
  }

  getHistory = () => {
    const {
      props: {companyId}
    } = this;

    this.setState({
      history: [
        {id: 1, text: "Created new company entry.", timestamp: "Yesterday at 13:12"},
        {id: 2, text: "NEW tag added.", timestamp: "Yesterday at 13:12"},
        {id: 3, text: "Admin filled ACRA statement.", timestamp: "Yesterday at 13:12"},
        {id: 4, text: "PENDING tag added.", timestamp: "Yesterday at 13:12"},
      ]
    })

  }

  render(){
    const {history} = this.state;

    return(
      <div className="history">
        <div className="container">
          <div className="history__list">
            {history.map(x => (
              <div
                key={x.id}
                className="history__item">
                <span>{x.text}</span>
                <span>{x.timestamp}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default History
