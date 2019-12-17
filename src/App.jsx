import './App.css';
import React from 'react';
import List from './List'
import Home from './Home'
import UserDetails from './UserDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.detailsId = undefined;
    this.state = {
      items: [
        {
          name: 'Petya',
          surname: 'Petrov',
          gender: 'Male'
        },
        {
          name: 'Masha',
          surname: 'Marianova',
          gender: 'Female'
        }
      ],
      user: {
        name: '',
        surname: '',
        gender: ''
      },
      errorFlag: false,
      navigate: false
    }
  };

  handleShowDetails = (detailsId) => {
    this.detailsId = detailsId;
    this.setState({navigate: true});
  }

  handleRemove = (removeId) => {
    let newItems = this.state.items.splice(removeId, 1);
    this.setState({ newItems });
  }

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
          <Switch>
            <Route path="/list">
              <List items={this.state.items} onShowDetails={this.handleShowDetails} />
            </Route>
            <Route path="/home">
              <Home user={this.state.user} items={this.state.items} errorFlag={this.state.errorFlag} onUserChange={this.handleChange}
                onUserSubmit={this.handleSubmit} onUserRemove={this.handleRemove} onShowDetails={this.handleShowDetails} />
            </Route>
            <Route path="/user-details">
              <UserDetails user={this.state.items[this.detailsId]} />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
