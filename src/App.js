import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import NotFound from './NotFound';
import Start from './Start';


const App = () => {

  return (
    //BEM class naming convention.
    <div className="App">
     <Router> 
       <Switch>
    <Route path="/" exact>
            {' '}
            <HomePage />{' '}
          </Route>
    <Route path="/start" exact>
            {' '}
            <Header/>
            <Start />{' '}
          </Route>
    <Route component={NotFound}/>
    </Switch>
    </Router>
    
    </div>

    
  );
}

export default App;
 