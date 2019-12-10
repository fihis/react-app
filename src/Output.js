import React from 'react';

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
      )
    }
  }

  export default Output;