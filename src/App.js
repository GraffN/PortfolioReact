import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div>
          <h1>App</h1>
            <Nav />
            <Switch>
                <Route path= "/" exact component={Home}></Route>
                <Route path = "/about" component={About}></Route>
                <Route path = "/shop" component={Shop}></Route>
            </Switch>
        </div>
      </Router>
  );
}

const Home = () => (
    <div>
        <h1>
            Home page
        </h1>
    </div>
)

export default App;
