import React from 'react';

class UserDetails extends React.Component {

    render() {
        return (
            <div className='wrapper'>
                <h2>User details</h2>
                <p>Name: {this.props.user.name}</p>
                <p>Surname: {this.props.user.surname}</p>
                <p>Gender: {this.props.user.gender}</p>
            </div>
        )
    }
}

export default UserDetails