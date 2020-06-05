import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => ({

        formType: 'signup',
        errors: errors.session,
        // navLink: <Link to="/login">Please Login</Link>,
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
    ),
    openModal: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal())
})

// const mDTP = dispatch => ({
//     createNewUser: formUser => dispatch(createNewUser(formUser))
// })

export default connect(mSTP, mDTP)(SignUpForm);