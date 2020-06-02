import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { Link } from 'react-router-dom';

const mSTP = ({ errors }) => {
    return {
        formType: 'signup',
        errors: errors.session,
        navLink: <Link to="/login">Please Login</Link>,
    }
}

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user))
})

// const mDTP = dispatch => ({
//     createNewUser: formUser => dispatch(createNewUser(formUser))
// })

export default connect(mSTP, mDTP)(SignUpForm);