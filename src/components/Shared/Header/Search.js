import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ClickOutside from 'react-click-outside';
import SvgIcon from 'components/Helpers/SvgIcon';
import AdvancedSearch from './AdvancedSearch';
import debounce from 'lodash/debounce';

class Search extends Component {
  constructor(){
    super();

    this.suggestionsFakeApi = [
      {id: 1, name: "ACME Company LTE"},
      {id: 2, name: "ACME Company LTE"}
    ]

    this.state = {
      searchValue: '',
      suggestions: this.suggestionsFakeApi,
      showSuggestions: false, // TODO - remove on testing
      showAdvanced: false
    }

    this.typeWithDebounce = debounce(this.handleSearch, 200)
  }

  searchChangeValue = (e) => {
    let fleldVal = e.target.value;
    this.setState(
      {...this.state, searchValue: fleldVal},
      () => this.typeWithDebounce()
    );
  }

  handleSearch = () => {
    const { searchValue } = this.state;

    if ( searchValue.length > 2 ){
      this.setState({
        ...this.state,
        suggestions: this.suggestionsFakeApi,
        showSuggestions: true
      })
    } else {
      this.hideSuggestions();
    }
  }

  hideSuggestions = () => {
    this.setState({
      ...this.state,
      showSuggestions: false,
      showAdvanced: false
    })
  }

  showAdvancedFilter = () => {
    this.setState({
      ...this.state,
      showAdvanced: true
    })
  }

  searchSubmited = () => {
    alert('search submited')
  }

  render(){
    const {
      state: {searchValue, suggestions, showSuggestions, showAdvanced}
    } = this;

    return(
      <ClickOutside
        onClickOutside={this.hideSuggestions}
        className={"header__search header-search"}>
        <div className="header-search__icon">
          <SvgIcon name="search" />
        </div>
        <input
          className="header-search__input"
          type="text"
          name="searchValue"
          id="searchValue"
          placeholder="Search ..."
          onChange={this.searchChangeValue}
          value={searchValue} />
        { (showSuggestions && !showAdvanced) &&
          <div className="header-search__suggestions">
            { suggestions.map(s => (
              <Link
                key={s.id}
                to={`company/${s.id}`}
                className="header-search__suggestion">
                {s.name}
              </Link>
            ))}
            <div
              onClick={this.showAdvancedFilter}
              className="header-search__advanced-toggle">
              <SvgIcon name="filter" />
              <span>Advanced filter…</span>
            </div>
          </div>
        }
        { showAdvanced &&
          <AdvancedSearch />
        }
      </ClickOutside>
    )
  }
}

export default Search
