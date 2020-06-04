import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

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
            <div className="login-form">
                {/* <div className="modal-child"> */}
                <div>
                    <h2 className="login-header">Log in to Foxeo</h2>
                    {/* <p className="close-x">x</p> */}
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
                    <button className="login-button" onClick={this.handleSubmit}>Log in with email</button>

                    <span className="login-footer">Don't have an account?
                        <Link className="login-form-btn" onClick={() => props.openModal('signup')}>Join</Link>
                    </span>
                </form>
            </div>
        );
    }
};

export default Login;