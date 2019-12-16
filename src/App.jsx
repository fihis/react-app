import './App.css';
import React from 'react';
import List from './List'
import Home from './Home'
import UserDetails from './UserDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  
  render() {

    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/list">List</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/user-details">
              <UserDetails />
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
  
}


export default App;
