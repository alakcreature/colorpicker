import React from 'react';
import {Redirect,Route} from 'react-router-dom';
import {connect} from "react-redux";

function LoginWrapper({ children,Auth, ...rest }) {
    console.log(Auth)
    return (
        <Route
        {...rest}
        render={({ location }) =>
            !Auth.isLoggedIn ? (
            children
            ) : (
            <Redirect
                to={{
                pathname: "/dashboard"
                }}
            />
            )
        }
        />
    );
}

const mapStateToProps = (state) => ({
    Auth : state.Auth
});

export default connect(mapStateToProps,{})(LoginWrapper);
