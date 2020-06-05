import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route
        path={path}
        exact={exact}
        render={props =>
            !loggedIn ? <Component {...props} /> : <Redirect to="/" />
        }
    />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route 
        path={path} 
        exact={exact} 
        render={(props) => 
            loggedIn ? <Component {...props} /> : <Redirect to="/login" />
        } 
    />
);

const mapStateToProps = state => {
    // debugger
    // return { loggedIn: Boolean(state.session.id) };
    return { loggedIn: Boolean(state.session.currentUsser) };
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));