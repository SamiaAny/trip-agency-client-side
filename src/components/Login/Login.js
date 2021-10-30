import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
// import useFirebase from '../../hooks/useFirebase';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, setUser, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log(location.state?.from);
    const redirect_uri = location.state?.from || '';

    const handleGoogleSignin = () => {
        signInUsingGoogle()
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                history.push(redirect_uri);
            })
            .catch(error => {
                console.log(error.message);
            })
            .finally(()=>setIsLoading(false))
    }
    return (
        <div className="d-flex justify-content-center align-items-center login-part">
            <div className="box border shadow-lg">
                <h1 className="text-center mb-5">Please Log in</h1>
                <button onClick={handleGoogleSignin} className="btn btn-outline-primary"><i className="bi bi-google me-2"></i>Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;