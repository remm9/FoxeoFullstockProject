import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';

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
            // .then(() => this.props.history.push('/users')); //change to /videos later
    }

    mapErrors() {
        // debugger
        if (this.props.errors.length) {
            return this.props.errors.map(error => {
                return <p>{error}</p>
            })
        }
    }

    // viewDemoClick(event) {
    //     // debugger
    //     event.preventDefault();
    //     const demoUser = {
    //         username: 'test',
    //         password: 'hunter2'
    //     };
    //     this.props.processForm(demoUser);
    // }

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
                    
                    <div className="errors">{this.mapErrors()}</div>
            
                    
                    <button className="login-button" onClick={this.handleSubmit}>Log in with email</button>

                    <div className="login-footer">Don't have an account?
                        <button className="login-form-btn" onClick={() => this.props.openModal('signup')}>Join</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Login;