import React from 'react';
import "./style.scss";
import Home from './Components/Home.js';
import Navigation from "./Components/Navigation.js"
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <div className="content">
          <Switch>

            <Route exact path="/">
             <Home/>
            </Route>

            
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
