import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import CatsIndexContainer from './containers/CatsIndexContainer'
import CatFormContainer from './containers/CatFormContainer'

const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={CatsIndexContainer} />
        <Route path='/cats/new' component={CatFormContainer} />
        <Route path="*" component={CatsIndexContainer} />
      </Route>
    </Router>
  )
}

export default App
