import './App.css';
import React from 'react';
import Output from './Output'
import Userform from './Userform'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      user: {
        name: '',
        surname: '',
        gender: ''
      }
    };
  }

  handleChange = (user) => {
    this.setState({ user });
  }



  //поменять state.items на items
  handleSubmit = (items) => {
    e.preventDefault();
    for (let key in this.state.user) {
        if (this.state.user[key] === '') {
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

    // пишем кастомный обработчик onSubmitUser={колбэк обработчик}
    return (








      <div className="App">
        <Userform user={user} items={items} onUserChange={this.handleChange} onUserSubmit={this.handleSubmit}/>
        {(this.state.items.length > 0) &&
          (<Output items={this.state.items} />)}
      </div>

    );
  }

}




// function App() {
//   return (
//     <div className="App">
//       <InputApp />
//     </div>
//   );
// }

export default App;
