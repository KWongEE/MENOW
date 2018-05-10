import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
// import CatsIndexContainer from './containers/CatsIndexContainer'
import Map from './components/Map'



const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={Map} />

          </Route>
    </Router>
  )
}

export default App;
