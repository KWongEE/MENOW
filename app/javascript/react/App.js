import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import CatsIndexContainer from './containers/CatsIndexContainer'



const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={CatsIndexContainer} />

      </Route>
        <Route path="*" component={CatsIndexContainer} />
    </Router>
  )
}

export default App;
