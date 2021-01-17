import React from "react";
import styled from "styled-components";
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
    console.log(response);
}

const GoogleLogDiv = () => {
    return (    
        <GoogleLogin
            style={{width:"100px"}}
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login to Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleLogDiv;