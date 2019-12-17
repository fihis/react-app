import React from 'react';
import { withRouter } from 'react-router-dom';

class List extends React.Component {

    handleShowDetails = (e) => {
        this.props.onShowDetails(e.target.parentElement.getAttribute('listId'));
        this.props.history.push('/user-details');
    }

    render() {
        return (
            <div className="wrapper">
                <h2>List Page</h2>
                {(this.props.items.length > 0) &&
                    (<table>
                        <tbody>
                            {this.props.items.map((item, index) => (
                                <tr onClick={this.handleShowDetails} listId={index} key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.gender}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>)}
            </div>
        )
    }
}

export default withRouter(List)