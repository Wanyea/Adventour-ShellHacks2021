import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import './App.css';
import Header from './Header';
import HomePage from './HomePage';
import Start from './Start';

function App() {
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
    </Switch>
    </Router>
    {/* Header with Home buttons, etc.. */}
    {/* Main greeting text varies by TOD*/}
    {/* Start button */}


    </div>
    
  );
}

export default App;
 