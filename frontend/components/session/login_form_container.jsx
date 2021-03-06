import React from 'react';
import { connect } from 'react-redux';
import { login, resetErrors } from '../../actions/session_actions';
import LogInForm from './login_form';
import { openModal, closeModal } from '../../actions/modal_actions';

const mSTP = ({ errors }) => {
    return {
        formType: 'login',
        errors: errors.session,
    }
}

const mDTP = dispatch => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <button onClick={() => dispatch(openModal('signup'))}>
            Join
        </button>
    ),
    openModal: () => dispatch(openModal('signup')),
    closeModal: () => dispatch(closeModal()),
    resetErrors: () => dispatch(resetErrors())
})

export default connect(mSTP, mDTP)(LogInForm);
