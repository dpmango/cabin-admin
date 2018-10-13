import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NotificationsSystem from 'reapop';
import theme from 'reapop-theme-wybo';
import RenderSwitch from './Switch';

import svg4everybody from 'svg4everybody';

class App extends React.Component {

  componentDidMount(){
    require('viewport-units-buggyfill').init({
      force: false,
      refreshDebounceWait: 150
    });

    svg4everybody();
  }

  render(){
    return (
      <BrowserRouter>
        <div className="page">
          <div className="page__content">
            <NotificationsSystem theme={theme} />
            <RenderSwitch/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
