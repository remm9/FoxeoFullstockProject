import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignUpForm from './signup_form';
import { openModal, closeModal } from '../../actions/modal_actions';
import { resetErrors } from '../../actions/session_actions'

const mSTP = ({ errors }) => ({
        formType: 'signup',
        errors: errors.session,
});

const mDTP = dispatch => ({
    processForm: user => dispatch(signup(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))}>
            Login
        </button>
    ),
    openModal: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors())
})

export default connect(mSTP, mDTP)(SignUpForm);