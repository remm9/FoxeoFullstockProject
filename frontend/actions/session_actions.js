import * as apiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveErrors = (errors) => ({
    type: RECEIVE_ERRORS,
    errors
})

const clearErrors = () => ({
    type: CLEAR_ERRORS,
    errors: []
})

const receiveCurrentUser = (user) => ({
    type: RECEIVE_CURRENT_USER,
    user
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});


export const signup = user => dispatch => (
    apiUtil.signup(user).then(user => (
        dispatch(receiveCurrentUser(user))
    ), err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
);

export const login = user => dispatch => {
    return apiUtil.login(user).then(user => {
        dispatch(receiveCurrentUser(user))
    }, err => (
        dispatch(receiveErrors(err.responseJSON))
    ))
};

export const logout = () => dispatch => apiUtil.logout()
    .then(() => dispatch(logoutCurrentUser())); 

export const resetErrors = () => dispatch(clearErrors());