import React from 'react';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: [],
            switched: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
        this.mapErrors = this.mapErrors.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
    }

    componentDidMount() {
        this.setState({ errors: this.props.errors})
    }

    componentDidUpdate(prev) {
        if (prev.errors.length !== this.props.errors.length) {
            this.setState( {errors: this.props.errors} )
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
        // debugger
        this.setState({ errors: [] }, function () {
            this.props.openModal('signup')
        });
        // debugger
    }

    mapErrors() {
        if (this.state.errors.length) {
            return this.state.errors.map((error, i) => {
                return <p key={i}>{error}</p>
            })
        }
    }

    handleErrors() {
        debugger
        if (!this.state.switched) {
            return <div className="errors">{this.mapErrors}</div>
        } else {
            return null;
        }
    };


    render() {
        console.log(this.state.errors)
        return (
            <div className="login-form">
                <div>
                    <h2 className="login-header">Log in to Foxeo</h2>
                </div>
                <form>
                    <input className="login-email"
                        type="text"
                        value={this.state.email}
                        placeholder="Email address"
                        onChange={this.handleInput('email')}
                    />
                    <input className="login-password"
                        type="password"
                        value={this.state.password}
                        placeholder="Password"
                        onChange={this.handleInput('password')}
                    />
                    
                    <div className="errors">{this.mapErrors()}</div>
                
                
                    {/* { this.state.switched ? 
                        <div className="errors">{this.handleErrors()}</div> :
                        <div className="errors">{this.mapErrors()}</div>
                    } */}
            
                    
                    <button className="login-button" onClick={this.handleSubmit}>Log in with email</button>

                    <div className="login-footer">Don't have an account?
                        {/* <button className="login-form-btn" onClick={() => this.props.openModal('signup')}>Join</button> */}
                        <button className="login-form-btn" onClick={ this.handleSwitch}> Join</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Login;