import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
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
    }

    mapErrors() {
        if (this.props.errors.length) {
            return this.props.errors.map((error, i)=> {
                return <p key={i}>{error}</p>
            })
        }
    }

    handleSwitch() {
        this.props.resetErrors()
        this.props.openModal('signup')
    }

    render() {
        return (
            <div className="login-form">
                <div>
                    <h2 className="login-header">Log in to Foxeo</h2>
                </div>
                <form>
                    <input className="login-email"
                        type="text"
                        value={this.state.email}
                        placeholder="Email adress"
                        onChange={this.handleInput('email')}
                    />
                    <input className="login-password"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInput('password')}
                    />

                    <div className="errors">{this.mapErrors()}</div>


                    <button className="login-button" onClick={this.handleSubmit}>Log in with email</button>

                    <div className="login-footer">Don't have an account?
                        <button className="login-form-btn" onClick={this.handleSwitch}>Join</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Login;