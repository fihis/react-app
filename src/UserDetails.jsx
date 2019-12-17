import React from 'react';
import apiService from './ApiService'

class UserDetails extends React.Component {
    constructor(props) {
        super(props)
        this.user = apiService.getUserById(this.props.match.params.id)
    }
    user = {};
    // componentDidMount() {
    //     console.log(this.props.match.params);
    //     this.user = apiService.getUserById(this.props.match.params.id)
    //     console.log(this.user);

    // }
    render() {
        //const {user} = this;
        return (
            <div className='wrapper'>
                <h2>User details</h2>
                <p>Name: {this.user.name}</p>
                <p>Surname: {this.user.surname}</p>
                <p>Gender: {this.user.gender}</p>
            </div>
        )
    }
}

export default UserDetails

