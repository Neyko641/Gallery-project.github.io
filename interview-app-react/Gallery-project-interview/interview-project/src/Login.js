import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './style.css';
import { useUser } from './Context/user'

const clientId = "139887959323-pmrdeecnpegsrrsr9fc437grr5nt68rr.apps.googleusercontent.com";

const Login = () => {
    const { setUser } = useUser();
    const onLoginSuccess = (res) => {
        setUser(res.profileObj);
    };
    const onLoginFailure = (res) => {
        alert(res);
    };
    return (
       
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                  
                /> 
    );
}

export default Login