import React from 'react';
import { Link } from 'react-router-dom';
// import { openModal } from '../../actions/modal_actions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSwitch = this.handleSwitch.bind(this);
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
        this.setState({ errors: [] })
        this.props.openModal('signup')
    }

    mapErrors() {
        if (this.props.errors.length) {
            return this.props.errors.map(error => {
                return <p>{error}</p>
            })
        }
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
            
                    
                    <button className="login-button" onClick={this.handleSubmit}>Log in with email</button>

                    <div className="login-footer">Don't have an account?
                        {/* <button className="login-form-btn" onClick={() => this.props.openModal('signup')}>Join</button> */}
                        <button className="login-form-btn" onClick={this.handleSwitch}>Join</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Login;