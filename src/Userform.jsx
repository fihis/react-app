import React from 'react';

class Userform extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            user: {
                name: '',
                surname: '',
                gender: ''
            }
        };
    }
    //поставть пока в сетстейт наш объект. 
    // делаем this.props.onSubmitUser = (collback который возвращает форму( возвращает объект из стейта));
    // Как из юзерформ пробросить наверх, можно пока без таблицы
    handleSubmit = (e) => {
        // e.preventDefault();
        // for (let key in this.state.user) {
        //     if (this.state.user[key] === '') {
        //         return
        //     }
        // }
        // const newItem = this.state.user;
        // this.setState(state => ({
        //     items: state.items.concat(newItem),
        //     user: { name: '', surname: '', gender: '' }
        // }));

        this.props.onUserSubmit(this.props.items);


    }

    handleChange = (e) => {

        // this.setState((state) => (
        //     {...this.state.user, ...{[e.target.id]: e.target.value}}
        //     ));


        //now
        // const state = this.state;
        // console.log(Object.assign(state.user, { [e.target.id]: e.target.value }))
        // this.setState(Object.assign(state.user, { [e.target.id]: e.target.value }));
        // console.log(this.state)

        //changing
        this.props.onUserChange({ [e.target.id]: e.target.value });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="input"
                    id='name'
                    onChange={this.handleChange}
                    // {value={this.state.user.name}}
                    value={this.state.props.name}
                />
                <input
                    className="input"
                    id='surname'
                    onChange={this.handleChange}
                    // {value={this.state.user.surname}}
                    value={this.state.props.surname}
                />
                <input
                    className="input"
                    id='gender'
                    onChange={this.handleChange}
                    // {value={this.state.user.gender}}
                    value={this.state.props.gender}
                />
                <button>
                    Submit
                </button>


            </form>
        );
    }
};
export default Userform