import React from "react";
import styled from "styled-components";
import GoogleLogDiv from "./login";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Logo from '../../assets/logo.svg';
import Button from 'react-bootstrap/Button';
import SS from '../../assets/ss.png';
import Email from '../../assets/email.svg';


const CustomBtn = styled(Button)`
    &.btn-login {
        background-color:#B0BEC9;
        margin-top:20px;
        margin-bottom:20px;
        font-weight: bold;
        font-size: 40px;
    }
}
`

const CustomH1 = styled.h1`
    &.big {
        font-size: 26px;
        margin-top:20px;
        margin-bottom:20px;
    }
    &.small {
        font-size: 22px;
        font-weight: lighter;
        margin-bottom:20px;
    }
    &.big2 {
        margin-top:50px;
        font-size: 40px;
    }
    &.small2 {
        font-size: 32px;
        font-weight: lighter;
        margin-bottom: 65px;
    }
    &.big3 {
        margin-top:20px;
        font-size: 40px;
    }
    &.small3 {
        font-size: 32px;
        font-weight: lighter;
        margin-bottom: 10px;
    }
}
`

const CustomHr = styled.hr`
    border: 1px solid black;
}
`

const CustomDiv = styled.div`
    background-color: #E4F1FD;
    height: 100%;
}
`

const CustomImg = styled.img`
    margin-bottom:40px;
}
`

const Homepage = () => {
    return (
        <CustomDiv>
            <Container>
                <Row className="justify-content-center">
                    <Col className="pr-0 mt-" md="auto">
                    <img src={Logo} width="300" height="300"/>
                    </Col>
                    <Col className="pl-0 align-self-end" md="auto">
                        <div>
                            <CustomH1 className="big2">myBoard</CustomH1>
                        </div>
                        <div>
                            <CustomH1 className="small2">.space</CustomH1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <CustomHr width="60%"/>
                </Row>
                <Row className="justify-content-center">
                    <GoogleLogDiv/>
                </Row>
                <Row className="justify-content-center">
                    <CustomH1 className="big">Bring your education to life using myBoard.space!</CustomH1>
                </Row>
                <Row className="justify-content-center">
                    <br/>
                    <CustomH1 className="small">Empowering students with real-time learning.</CustomH1>
                    <br/>
                </Row>
                <Row className="justify-content-center">
                    <CustomImg src={SS}/>
                </Row>
            </Container>
            <Container>
                <Row className="justify-content-center">
                    <CustomHr width="60%"/>
                </Row>
                <Row className="justify-content-center">
                    <CustomH1 className="big3">Need Technical Assistance?</CustomH1>
                </Row>
                <Row className="justify-content-center">
                    <CustomH1 className="small3">Contact us at myBoardspace@outlook.ca</CustomH1>
                </Row>
                <Row className="justify-content-center">
                    <img src={Email} width="100"/>
                </Row>
            </Container>
        </CustomDiv>
    );
}

export default Homepage;
