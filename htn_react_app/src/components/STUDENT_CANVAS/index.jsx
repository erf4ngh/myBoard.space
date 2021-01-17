import React, {useState, useRef, createRef, useEffect} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import CanvasDraw from "react-canvas-draw";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import app from "../../firebase";
import Logo from '../../assets/logo2.svg';

const CanvasWrapper = styled.div`
    border: 5px solid #B0BEC9;
    margin-bottom:10px;
`

const Logoutbtn =styled(Button)`
    padding:20 px;
    width: 60 px;
    &.btn-primary,&.btn-primary:active:focus, &.btn-primary:active, &.btn-primary:focus, &.btn-primary:visited {
        border: 0px;
        background-color: #B0BEC9; 
        !important;
    }

    &.btn-primary:hover{
        border: 0px;
        color: #000000;
        background-color: #E2F1FC; 
        !important;
    }
}
`

const CustomDiv = styled.div`
    height: 100vh;
}
`
const CustomH1 = styled.h1`
    &.title {
        margin-top:50px;
        font-size: 40px;
    }
    &.subtitle {
        font-size: 32px;
        font-weight: lighter;
        margin-bottom: 65px;
    }

    &.logout {
        font-size: 30px;
    }
}`

const LogoImg = styled.img`
    margin-Top:40px;
`

const StudentCanvasView = () => {
    const db = app.database();
    const [drawData, updateDrawData] = useState({});

    const loadableCanvas = useRef(null);

    useEffect(() => {
        db.ref('folder1/helloWord/data').on('value', (snapshot) => {
            const data = snapshot.val();
            updateDrawData(data);
            loadableCanvas.current.loadSaveData(data, true)
        })
    },[]);

    return (
        <CustomDiv>
            <Container>
                <Row> 
                    <Col xs="auto">
                        <LogoImg src={Logo} width="150" height="150"/>
                    </Col>
                    <Col className="align-self-end" xs="auto">
                        <div>
                            <CustomH1 className="title">myBoard</CustomH1>
                        </div>
                        <div>
                            <CustomH1 className="subtitle">.space</CustomH1>
                        </div>
                    </Col>
                    <Col xs="auto" className="ml-auto">
                        <Logoutbtn variant="primary"><CustomH1 className="logout">Logout</CustomH1></Logoutbtn>
                    </Col>
                </Row>
                <CanvasWrapper>
                    <CanvasDraw 
                    hideGrid="true"
                    disabled="true"
                    ref={loadableCanvas}
                    canvasWidth="100%"
                    canvasHeight="600px"
                    immediateLoading="false"
                    // saveData={drawData}
                    />   
                </CanvasWrapper>
            </Container>
        </CustomDiv>
    )
}

export default StudentCanvasView;