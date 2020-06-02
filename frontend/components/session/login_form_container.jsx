import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LogInForm from './login_form';
import { Link } from 'react-router-dom';

const mSTP = ({ errors }) => {
    return {
        formType: 'login',
        errors: errors.session,
        navLink: <Link to="/signup">Please Join</Link>,
    }
}

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user))
})

export default connect(mSTP, mDTP)(LogInForm);