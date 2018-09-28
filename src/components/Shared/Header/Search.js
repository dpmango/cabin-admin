import React, {Component} from 'react';


class Search extends Component {
  constructor(){
    super();

    this.state = {
      search: ''
    }
  }

  searchChangeValue = (e) => {
    let fleldVal = e.target.value;
    this.setState({search: fleldVal});
  }

  searchKeyPress = (e) => {
    if ( e.key === "Enter" ){
      this.searchSubmited();
    }
  }

  searchSubmited = () => {
    alert('search submited')
  }

  render(){
    const {
      state: {search}
    } = this;

    return(
      <div className="header__search header-search">
        <div className="header-search__icon"></div>
        <input
          className="header-search__input"
          type="text"
          name="search"
          id="search"
          placeholder="Search ..."
          onChange={this.searchChangeValue}
          onKeyPress={this.searchKeyPress}
          value={search} />
      </div>
    )
  }
}

export default Search
