import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest}) => {
    const { user, isLoading} = useAuth();
    if(isLoading) {
        return <Spinner className="spinner-circle" animation="grow" variant="dark" ></Spinner>
    }
    return (
        <Route
            {...rest}
            render = {({location})=> user?.email ? children :
            <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>}
        ></Route>
    );
};

export default PrivateRoute;