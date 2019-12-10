import React from 'react';

class Userform extends React.Component {
    constructor(props) {
        super(props);
    }
    //поставть пока в сетстейт наш объект. 
    // делаем this.props.onSubmitUser = (collback который возвращает форму( возвращает объект из стейта));
    // Как из юзерформ пробросить наверх, можно пока без таблицы
    handleChange = (e) => {
        this.setState({ text: e.target.value });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    className="input"
                    onChange={this.handleChange}
                    value={this.props.user.name}
                />
                <input
                    className="input"
                    onChange={this.handleChange}
                    value={this.props.user.surname}
                />
                <input
                    className="input"
                    onChange={this.handleChange}
                    value={this.props.user.gender}
                />
                <button>
                    Submit
                </button>
                {(this.state.items.length > 0) &&
                    (<Output items={this.state.items} />)}

            </form>
        );
    }
};
export default Userform