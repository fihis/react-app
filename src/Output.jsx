import React from 'react';

class Output extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.items.map((item, index) => (
            <tr key={index + 1}>
              <td>{item.name}</td>
              <td>{item.surname}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Output