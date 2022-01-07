import React from 'react';
import {  GoogleLogout } from 'react-google-login';
import { useUser } from './Context/user'

const clientId = "139887959323-pmrdeecnpegsrrsr9fc437grr5nt68rr.apps.googleusercontent.com";

const Logout = () => {
    const { setUser } = useUser();

    const onSignoutSuccess = () => {
        alert("You have been logged out successfully");
        setUser({});
    };

    return (
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout>
    );
}

export default Logout