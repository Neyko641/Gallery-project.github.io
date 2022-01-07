import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import './login.css'
const clientId = "139887959323-pmrdeecnpegsrrsr9fc437grr5nt68rr.apps.googleusercontent.com";

const Login = ( {handleLogin} ) => {
    const [showloginButton, setShowloginButton] = useState(true);
    const [, setShowlogoutButton] = useState(false);
    const onLoginSuccess = (res) => {
        handleLogin(res.profileObj.givenName);
        setShowloginButton(false);
        setShowlogoutButton(true);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };
    

    return (
        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}
        </div>
    );
}

export default Login