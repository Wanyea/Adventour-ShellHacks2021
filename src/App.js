import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import Itinerary from './Itinerary.js';
import Start from './Start';

const App = () => {

  return (
    //BEM class naming convention.
    <div className="App">
     <Router> 
       <Header/>
       <Switch>
    <Route path="/" exact>
            {' '}
            <HomePage />{' '}
          </Route>
    <Route path="/start" exact>
            {' '}
            <Start />{' '}
          </Route>
    <Route path="/itinerary" exact>
            {' '}
            <Itinerary />{' '}
          </Route>
    </Switch>
    </Router>
    
    </div>

    
  );
}

export default App;
 