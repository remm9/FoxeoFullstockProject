import React from 'react';
import { Link } from 'react-router-dom';
import { openModal } from '../../actions/modal_actions';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
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
                
                    <button className="signup-button" onClick={this.handleSubmit}>Join with email</button>

                    <span className="signup-footer">Already have an account?
                        <button className="signup-form-btn" onClick={() => this.props.openModal('login')}>Log In</button>
                    </span>
                </form>
            </div>
        );
    }
};

export default Signup;