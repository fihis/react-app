import React from 'react';
import logo from './logo.svg';
import './App.css';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.value
    }
  }
  // changeHandler = () => {
  //   this.setState((state) => ({
  //     text: 
  //   }
  //   )
  //   )
  // }
  render() {
    return (
      <textarea defaultValue={this.props.value}>
        
      </textarea>
    )
  }
};

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <output>
        {this.props.value}
      </output>
    )
  }
}

class TestButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0,
      buttonText: props.text
    }
  }
  clickHandler = (e) => {
    this.setState((state) => (
      {
        clickCounter: ++state.clickCounter,
        buttonText: `You clicked me ${this.state.clickCounter} ${(this.state.clickCounter > 1) ? 'times' : 'time'}`
      }
    )
    )
  }
  render() {
    return (
      //<button onClick = {(e) => {this.clickHandler(e, 'string')}}>
      <button onClick={this.clickHandler}>
        {this.state.buttonText}
      </button>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TestButton text='PUSH ME' />
        <Input value='Enter text here...' />
        <Output value={Input.value} />
      </header>
    </div>
  );
}

export default App;
