import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
import CatsIndexContainer from './containers/CatsIndexContainer'
import CatFormContainer from './containers/CatFormContainer'
import CatShowContainer from './containers/CatShowContainer'
import UserShowContainer from './containers/UserShowContainer'
import MapContainer from './containers/MapContainer'


const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
        <IndexRoute component={MapContainer} />
        <Route path='/cats/new' component={CatFormContainer} />
        <Route path="/cats/:id" component={CatShowContainer}/>
        <Route path="/users/:id" component={UserShowContainer}/>
        <Route path="*" component={CatsIndexContainer} />
      </Route>
    </Router>
  )
}

export default App
