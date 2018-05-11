import React from 'react';
import { Route, IndexRoute, Router, browserHistory } from 'react-router';
<<<<<<< HEAD
// import CatsIndexContainer from './containers/CatsIndexContainer'
import Map from './components/Map'
=======
import CatsIndexContainer from './containers/CatsIndexContainer'
import CatFormContainer from './containers/CatFormContainer'
import CatShowContainer from './containers/CatShowContainer'
>>>>>>> master



const App = (props) => {
  return(
    <Router history={browserHistory}>
      <Route path='/'>
<<<<<<< HEAD
        <IndexRoute component={Map} />

          </Route>
=======
        <IndexRoute component={CatsIndexContainer} />
        <Route path='/cats/new' component={CatFormContainer} />
        <Route path="/cats/:id" component={CatShowContainer}/>
        <Route path="*" component={CatsIndexContainer} />
      </Route>
>>>>>>> master
    </Router>
  )
}

export default App
