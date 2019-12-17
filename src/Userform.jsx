import React from 'react';

class Userform extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onUserSubmit();
    }

    handleChange = (e) => {
        this.props.onUserChange(e.target.id, e.target.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="input"
                    id='name'
                    onChange={this.handleChange}
                    value={this.props.user.name}
                />
                <input
                    className="input"
                    id='surname'
                    onChange={this.handleChange}
                    value={this.props.user.surname}
                />
                <input
                    className="input"
                    id='gender'
                    onChange={this.handleChange}
                    value={this.props.user.gender}
                />
                <button>
                    Submit
                </button>
            </form>
        );
    }
};

export default Userform