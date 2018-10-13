import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { routes } from './routes';

import ScrollTo from 'services/ScrollTo';

class RenderSwitch extends React.Component {
  componentDidMount(){

  }
  componentDidUpdate(prevProps) {
    // when new page is triggered - scroll to top
    if (this.props.location.pathname !== prevProps.location.pathname) {
      ScrollTo(0, 300);
    }
  }

  render(){
    return(
      <Switch>
        {routes.map(route => (
          <Route
            key={route.path}
            exact={route.isExact}
            path={route.path}
            component={route.component}
          />
        ))}
      </Switch>
    )
  }
}

export default withRouter(
  RenderSwitch
);
