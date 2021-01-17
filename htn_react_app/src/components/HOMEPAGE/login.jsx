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
            clientId="1090281374340-065beqt8a17t00k6c1q9v1endlblhs1b.apps.googleusercontent.com"
            buttonText="Login to Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleLogDiv;