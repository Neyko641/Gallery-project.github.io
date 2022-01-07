import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import './style.css';
import { useUser } from './Context/user'

const clientId = "139887959323-pmrdeecnpegsrrsr9fc437grr5nt68rr.apps.googleusercontent.com";

const Login = (  ) => {
    const { setUser } = useUser();
    const [showloginButton, setShowloginButton] = useState(true);
    const onLoginSuccess = (res) => {
        setUser(res.profileObj);
        setShowloginButton(false);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };
    return (
        <div>
        {
            <div className="Login-button">
            { showloginButton }
            </div>
             ?
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