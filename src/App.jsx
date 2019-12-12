import './App.css';
import React from 'react';
import Output from './Output'
import Userform from './Userform'
import ErrorMsg from './ErrorMsg'
import List from './List'
import Home from './Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      user: {
        name: '',
        surname: '',
        gender: ''
      },
      errorFlag: false
    }
  };

  handleChange = (target, value) => {
    this.setState({ user: { ...this.state.user, [target]: value }, errorFlag: false })
  }

  handleSubmit = () => {
    for (let key in this.state.user) {
      if (this.state.user[key] === '') {
        this.setState({ errorFlag: true });
        return
      }
    }
    const newItem = this.state.user;
    this.setState(state => ({
      items: state.items.concat(newItem),
      user: { name: '', surname: '', gender: '' }
    }));
  }

  render() {
    const user = this.state.user;
    const items = this.state.items;

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
          </Switch>
        </div>
      </Router>
    );
  }
  // return (
  //   <div className="App">
  //     <Userform user={user} items={items} onUserChange={this.handleChange} onUserSubmit={this.handleSubmit} />
  //     {(this.state.errorFlag) && (<ErrorMsg text='Fill all fields first' />)}
  //     {(this.state.items.length > 0) &&
  //       (<Output items={this.state.items} />)}
  //   </div>
  // );
}


export default App;
