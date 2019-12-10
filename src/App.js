import './App.css';
import React from 'react';
import Output from './Output'


class InputApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
  }
  
  render() {
    return (
      {
        // пишем кастомный обработчик onSubmitUser={колбэк обработчик}
      }
      <Userform user={{name: '', surname: '', gender: ''}}/>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}




function App() {
  return (
    <div className="App">
      <InputApp />
    </div>
  );
}

export default App;
