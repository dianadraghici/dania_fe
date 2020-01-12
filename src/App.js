import React from 'react';
import './App.css';
import Home from './components/home';
import {
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Header>
    </div>
  );
}

export default App;
