import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { routes } from './routes';
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
            <RenderSwitch/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
};

export default App;
