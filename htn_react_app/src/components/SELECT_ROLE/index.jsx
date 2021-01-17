import React, {useState} from "react";
import styled from "styled-components";
import Logo from '../../assets/logo2.svg';
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {Redirect} from "react-router-dom";

const OuterCardDiv = styled.div`
    position:relative;
    border-radius:10px;
    border:2px solid transparent;
    width:wrap;
    margin-top:20px;
    margin-bottom:20px;
    margin-left:40px;
    margin-right:40px;
    padding:1rem;

    &.default{
        border-color:#e0e0e0;
        margin-top:20px;
        margin-bottom:20px;
        transition: border-color 0.25s ease, margin-top 0.25s ease, margin-bottom 0.25s ease;
    

        :hover{
            cursor:pointer;
            margin-top:15px;
            margin-bottom:25px;
            border-color:#43464b;
            transition: border-color 0.25s ease, margin-top 0.25s ease, margin-bottom 0.25s ease; 
        }
    }
`

const InnerCardDiv = styled.div`
    margin:10px;
    text-align:center;
`

const CustomH1 = styled.h1`
    &.big {
        font-size: 26px;
        margin-top:20px;
        margin-bottom:20px;
    }
    &.small {
        font-size: 24px;
        font-weight: lighter;
        margin-bottom:20px;
    }
    &.big2 {
        margin-top:50px;
        font-size: 50px;
        margin-bottom:0px;
    }
    &.small2 {
        font-size: 36px;
        font-weight: lighter;
        margin-bottom: 65px;
    }
    &.big3 {
        margin-top:20px;
        font-size: 40px;
    }
    &.small3 {
        margin-top:20px;
        font-size: 42px;
        font-weight: lighter;
        margin-bottom: 10px;
    }
`

const CustomImg2 = styled.img`
    margin-Top:40px;
`

const CustomDiv = styled.div`
    background-color: #FFFFFF;
    height: 100vh;
` 

const SelectPage = () => {
    const [redirect, setredirect] = useState(null)

    if (redirect) {
        return(<Redirect to={redirect}/>)
    }

    return (
        <CustomDiv>
            <Row style={{alignItems:"center"}} className="justify-content-center">
                <Col style={{paddingRight:"0px"}} md="auto">
                    <CustomImg2 src={Logo} width="200" height="200"/>
                </Col>
                <Col style={{paddingLeft:"0px"}} className="align-self-end" md="auto">
                    <div>
                        <CustomH1 className="big2">myBoard</CustomH1>
                    </div>
                    <div>
                        <CustomH1 className="small2">.space</CustomH1>
                    </div>
                </Col>
            </Row>
            <Row style={{alignItems:"center"}} className="justify-content-center">
                <CustomH1 className="small3">I am a...</CustomH1>
            </Row>
            <Row style={{alignItems:"center"}} className="justify-content-center">
                <Col md="auto">
                    <OuterCardDiv className="default" 
                    onClick={() => {
                        setredirect('/canvas');
                    }}>
                        <InnerCardDiv>
                        <svg xmlns="http://www.w3.org/2000/svg" width="350px" height="350px" fill="currentColor" class="bi bi-person-square" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                        </svg>
                        <CustomH1 className="big2">Teacher</CustomH1>
                        </InnerCardDiv>
                    </OuterCardDiv>
                </Col>
                <Col md="auto">
                    <OuterCardDiv className="default" 
                    onClick={() => {
                        setredirect('/student');
                    }}>
                        <InnerCardDiv>
                        <svg xmlns="http://www.w3.org/2000/svg" width="350px" height="350px" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
                        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                        </svg>
                        <CustomH1 className="big2">Student</CustomH1>
                        </InnerCardDiv>
                    </OuterCardDiv>
                </Col>
            </Row>


        </CustomDiv>
    )

}

export default SelectPage;