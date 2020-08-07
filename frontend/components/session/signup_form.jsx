import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            errors: [],
            switched: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
        this.mapErrors = this.mapErrors.bind(this);

    }

    componentDidMount() {
        this.setState({ errors: this.props.errors })
    }

    componentDidUpdate(prev) {
        if (prev.errors.length !== this.props.errors.length) {
            this.setState({ errors: this.props.errors })
        }
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

    handleSwitch() {
        this.setState({ switched: true }, function () {
            this.props.openModal('login')
        });
    }

    mapErrors() {
        if (this.state.errors.length) {
            return this.state.errors.map((error, i) => {
                if (error.includes('Username')) {
                    return <p key={i}>First and Last names can't be blank</p>
                } else {
                    return <p key={i}>{error}</p>
                }
            })
        }
    }

    handleErrors() {
        if (!this.state.switched) {
            <div className="errors">{this.mapErrors()}</div>
        } else {
            <div className="errors">{this.mapErrors()}</div>
        }
    };

    render() {
        return (
            <div className="signup-form">
                <h2 className="signup-header">Join Foxeo</h2>
                <form>
                        <input className="signup-username"
                            type="text"
                            value={this.state.username}
                            placeholder="First and Last names"
                            onChange={this.handleInput('username')}
                        />
                
                   
                        <input className="signup-email"
                            type="text"
                            value={this.state.email}
                            placeholder="Email address"
                            onChange={this.handleInput('email')}
                        />
                        <input className="signup-password"
                            type="password"
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.handleInput('password')}
                        />

                    {/* <div className="errors">{this.mapErrors()}</div> */}
                    {/* {this.state.switched ?
                        <div className="errors">{this.handleErrors()}</div> :
                        <div className="errors">{this.mapErrors()}</div>
                    }
                 */}
                    <div>{this.handleErrors()}</div>
                    
                    <button className="signup-button" onClick={this.handleSubmit}>Join with email</button>

                    <div className="signup-footer">Already have an account?
                        {/* <button className="signup-form-btn" onClick={() => this.props.openModal('login')}>Log In</button> */}
                        <button className="signup-form-btn" onClick={this.handleSwitch}>Log In</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Signup;