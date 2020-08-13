import React from 'react';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
            return this.props.errors.map((error, i) => {
                if (error.includes('Username')) {
                    return <p key={i}>First and Last names can't be blank</p>
                } else {
                    return <p key={i}>{error}</p>
                }
            })
        }
    }

    handleSwitch() {
        this.props.resetErrors()
        this.props.openModal('login')
    }

    render() {
        return (
            <div className="signup-form">
                <h2 className="signup-header">Join Foxeo</h2>
                <form>
                    <input className="signup-username"
                        type="text"
                        value={this.state.username}
                        placeholder="First and last names"
                        onChange={this.handleInput('username')}
                    />

                    <input className="signup-email"
                        type="text"
                        value={this.state.email}
                        placeholder="Email adress"
                        onChange={this.handleInput('email')}
                    />
                    <input className="signup-password"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInput('password')}
                    />

                    <div className="errors">{this.mapErrors()}</div>

                    <button className="signup-button" onClick={this.handleSubmit}>Join with email</button>

                    <div className="signup-footer">Already have an account?
                        <button className="signup-form-btn" onClick={this.handleSwitch}>Log In</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Signup;