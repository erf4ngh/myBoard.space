import React, {useState, useEffect, useContext} from "react";
import styled from "styled-components";
import GoogleLogin from 'react-google-login';
import logo from "../../assets/google_logo.svg";
import UserContext from "../../libs/contextLibs";
import { signInWithGoogle } from "../../firebase";
import { Redirect } from 'react-router-dom';

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
    const user  = useContext(UserContext);
    
    // useEffect(() => {
    //     if (user) {
    //       <Redirect to='/canvas'/>
    //     }
    //   }, []);

    return (    
            <StyledButton onClick={signInWithGoogle}>
                <img style={{height:"30px"}}src={logo}/>
                <StyledBtnText>Sign in with Google</StyledBtnText>
            </StyledButton>
    )
}

export default GoogleLogDiv;