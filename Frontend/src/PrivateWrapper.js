import React from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';


function PrivateRoute({ children,Auth, ...rest }) {
    
    console.log(Auth.isLoggedIn)
    return (
        <Route
            {...rest}
            render={() =>
                Auth.isLoggedIn ? (
                    children
                ) : (
                <Redirect
                    to={{
                        pathname: "/login"
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

export default connect(mapStateToProps,{})(PrivateRoute);