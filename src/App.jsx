import './App.css';
import React from 'react';
import List from './pages/List'
import Home from './pages/Home'
import UserDetails from './molecules/UserDetails'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
// import Users from './infrastructure/Mocks'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.detailsId = undefined;
    this.state = {
      // items: Users,
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
    //console.log(removeId)
    this.props.deleteUser(removeId);
    //let newItems = this.state.items.splice(removeId, 1);
    //this.setState({ newItems });
  }

  handleChange = (target, value) => {
    this.setState({ user: { ...this.state.user, [target]: value }, errorFlag: false })
  }

  handleSubmit = () => {
    this.props.addUser({...this.state.user, id: (new Date()).getSeconds()});
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
            <Route path="/list"> {/*почему юзерс.юзерс??*/}
              <List items={this.props.users.users} 
                    onShowDetails={this.handleShowDetails} />
            </Route>
            <Route path="/home">
              <Home user={{}} 
                    items={this.props.users.users} 
                    errorFlag={false} 
                    onUserChange={this.handleChange}
                    onUserSubmit={this.handleSubmit} 
                    onUserRemove={this.handleRemove} 
                    onShowDetails={this.handleShowDetails} />
            </Route>
            <Route path="/user-details/:id" component={UserDetails}>
              {/* <UserDetails user={this.state.items[this.detailsId]} /> */}
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
