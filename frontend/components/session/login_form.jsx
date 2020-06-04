import React from 'react'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (err) => {
            this.setState({ [type]: err.currentTarget.value })
        };
    }

    handleSubmit(event) {

        event.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => this.props.history.push('/users')); //change to /videos later
    }


    render() {
        return (
            <div className="session-form">
                {/* <div className="modal-child"> */}
                <h2>Log in to Foxeo</h2>
                <form>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                    </label>
                    <button onClick={this.handleSubmit}>Log in with email</button>
                </form>
            </div>
        );
    }
};

export default Login;