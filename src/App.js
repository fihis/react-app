import './App.css';
import React from 'react';



class InputApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>

          <input
            class="input"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input
            class="input"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <input
            class="input"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Submit
                  </button>
          <Output items={this.state.items} />
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class Output extends React.Component {
  render() {
    return (


      <table>
        <tbody>
            
              {this.props.items.map(item => (
                <tr> <td>{item.text}</td></tr>
              ))}
            
        </tbody>
      </table>



     
      );
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
