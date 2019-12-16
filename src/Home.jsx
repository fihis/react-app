import React from 'react';
import ErrorMsg from './ErrorMsg'
import Userform from './Userform'
import Output from './Output'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            user: {
                name: '',
                surname: '',
                gender: ''
            },
            errorFlag: false
        }
    };

    handleChange = (target, value) => {
        this.setState({ user: { ...this.state.user, [target]: value }, errorFlag: false })
    }

    handleSubmit = () => {
        for (let key in this.state.user) {
            if (this.state.user[key] === '') {
                this.setState({ errorFlag: true });
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


        return (
            <div className="App">
                <h2>Home Page</h2>
                <Userform user={user} items={items} onUserChange={this.handleChange} onUserSubmit={this.handleSubmit} />
                {(this.state.errorFlag) && (<ErrorMsg text='Fill all fields first' />)}
                {(this.state.items.length > 0) &&
                    (<Output items={this.state.items} />)}
            </div>
        );
    }
}

export default Home