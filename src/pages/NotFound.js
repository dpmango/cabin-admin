import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SvgIcon from 'components/Helpers/SvgIcon';

class NotFound extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="not-found">
          <div className="container container--narrow">
            <div className="not-found__wrapper">
              <div className="not-found__image">
                404
              </div>
              <h2 className="not-found__title">No page found.</h2>
              <p className="not-found__desc t-paragraph">We can’t seem to find the page you’re looking for.</p>
              <div className="signup__nav signup__nav--complete">
                <Link to="/" className="btn btn--small btn--iconed">
                  <SvgIcon name="back-arrow" />
                  <span>Go Back to the Homepage</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default NotFound
