import React from 'react';

class Output extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.items.map(item => (
            <tr>
              <td>{item.user.name}</td>
              <td>{item.user.surname}</td>
              <td>{item.user.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  }
}

export default Output