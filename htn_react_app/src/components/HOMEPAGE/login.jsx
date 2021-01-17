import React from "react";
import styled from "styled-components";
import GoogleLogin from 'react-google-login';
import logo from "../../assets/google_logo.svg";

const responseGoogle = (response) => {
    console.log(response);
}

const StyledButton = styled.button`
    margin:20px 0 20px 0;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    width:220px;
    height:50px;
    border-radius:25px;
    border-width:0px;
    background-color:#FFF;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`   

const StyledBtnText = styled.p`
    font-weight:500;
    margin:auto 0 auto 0;
`

const GoogleLogDiv = () => {
    return (    
        <GoogleLogin
            clientId="1090281374340-065beqt8a17t00k6c1q9v1endlblhs1b.apps.googleusercontent.com"
            render={renderProps => (
            <StyledButton onClick={renderProps.onClick} disabled={renderProps.disabled}>
                <img style={{height:"30px"}}src={logo}/>
                <StyledBtnText>Sign in with Google</StyledBtnText>
            </StyledButton>
            )}
            buttonText="Login to Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
    )
}

export default GoogleLogDiv;