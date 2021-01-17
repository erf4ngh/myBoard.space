import React, {useState, useRef, createRef} from "react";
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
import iconLg from "../../assets/eraser-icon-lg.svg";

const CanvasWrapper = styled.div`
    border: 5px solid red;
`

const CustomBtn = styled(Button)`
    margin:5px;
    width:30px;
    height:30px;

    &.btn-red {
        background-color:#F31B02;
        margin-left:14px;
    }
    &.btn-green {
        background-color:#50BE64;
    }
    &.btn-blue {
        background-color:#1129FF;
    }
    &.btn-black {
        background-color:#000000;
    }
    &.btn-yellow {
        background-color:#F8E500;
    }
    &.btn-purple {
        background-color:#B221C0;
    }
    &.btn-eLarge{
        padding:0;
        margin-left:18px;
        display:block;
        text-align:center;
    }

    &.btn-eraser{
        padding:0;
        display:block;
        text-align:center;
    }

`

const ButtonWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
`

const CanvasPage = () => {
    const [brushColour, setBrushColour] = useState("#000000");
    const [brushSize, setBrushSize] = useState("1");
    const [gridHidden, setGridHidden] = useState(true);
    const [eraserMode, setEraserMode] = useState(false);

    const enableEraser = (size) => {
        setBrushSize(size);
        setBrushColour("#FFFFFF");
        setEraserMode(true);
    }

    const saveableCanvas = useRef(null);

    // // Establish connection w Firebase
    // if (!app.apps.length) {
    //     app.initializeApp(firebaseConfig);
    //     firebase = {
    //         app: app,
    //         database: app.database(),

    //         api: {
    //             pushDrawings
    //         }
    //     }
    // }

    // const pushDrawings = () => {
    //     console.log("Push shit");
    // }

    return (
        <>
        <CanvasWrapper>
                <CanvasDraw 
                    onChange={() => {
                        console.log("We drew something!")
                    }}
                    ref={saveableCanvas}
                    canvasWidth="80%"
                    canvasHeight="600px"
                    hideGrid={gridHidden}
                    brushRadius={brushSize}
                    lazyRadius='0'
                    brushColor={eraserMode ? "#FFFFFF" : brushColour}/>
        </CanvasWrapper>
        <Container>
            <Row md={4}> 
                <Col sm={4}>
                <DropdownButton as={ButtonGroup} title="Colour" id="bg-vertical-dropdown-1">
                    <ButtonWrapper>
                        <ButtonGroup className="mr-2" aria-label="Third group">
                            <CustomBtn variant="red" 
                            onClick={() => {
                            if (eraserMode){
                                setEraserMode(false);
                                setBrushColour("#FF0000");
                            }
                            else {
                                setBrushColour("#FF0000");
                            }}}>   
                            </CustomBtn>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Second group">
                            <CustomBtn variant="green"
                            onClick={() => {
                                if (eraserMode){
                                    setEraserMode(false);
                                    setBrushColour("#50BE64");
                                }
                                else {
                                    setBrushColour("#50BE64");
                                }}}></CustomBtn>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Third group">
                            <CustomBtn variant="blue" 
                            onClick={() => {
                                if (eraserMode){
                                    setEraserMode(false);
                                    setBrushColour("#1129FF");
                                }
                                else {
                                    setBrushColour("#1129FF");
                                }}}
                            ></CustomBtn>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Third group">
                            <CustomBtn variant="black"
                            onClick={() => {
                                if (eraserMode){
                                    setEraserMode(false);
                                    setBrushColour("#000000");
                                }
                                else {
                                    setBrushColour("#000000");
                                }}}></CustomBtn>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Third group">
                            <CustomBtn variant="yellow"
                            onClick={() => {
                                if (eraserMode){
                                    setEraserMode(false);
                                    setBrushColour("#F8E500");
                                }
                                else {
                                    setBrushColour("#F8E500");
                                }}}></CustomBtn>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Third group">
                            <CustomBtn variant="purple"
                            onClick={() => {
                                if (eraserMode){
                                    setEraserMode(false);
                                    setBrushColour("#B221C0");
                                }
                                else {
                                    setBrushColour("#B221C0");
                                }}}></CustomBtn>
                        </ButtonGroup>
                    </ButtonWrapper>
                </DropdownButton>
                </Col>
                <Col sm={4}>
                <DropdownButton as={ButtonGroup} title="Brush" id="bg-vertical-dropdown-1">
                    <ButtonWrapper>
                        <ButtonGroup className="mr-2" aria-label="Third group">
                            <CustomBtn variant="eLarge" 
                            onClick={() => {  
                                setBrushSize("20");
                            }}> 
                                <img style={{height:"30px"}} src={iconLg}/>
                            </CustomBtn>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Second group">
                            <CustomBtn variant="eraser" 
                                onClick={() => {  
                                    setBrushSize("10");
                                }}> 
                                <img style={{height:"22px"}} src={iconLg}/>
                            </CustomBtn>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Third group">
                            <CustomBtn variant="eraser" 
                                onClick={() => { 
                                    setBrushSize("2");
                                }}> 
                                <img style={{height:"15px"}} src={iconLg}/>
                            </CustomBtn>
                        </ButtonGroup>
                    </ButtonWrapper>
                </DropdownButton>
                </Col>  

                <Col sm={4}>
                <DropdownButton as={ButtonGroup} title="Eraser" id="bg-vertical-dropdown-1">
                    <ButtonWrapper>
                        <ButtonGroup className="mr-2" aria-label="Third group">
                            <CustomBtn variant="eLarge" 
                            onClick={() => {   
                                enableEraser("35");
                            }}> 
                                <img style={{height:"30px"}} src={iconLg}/>
                            </CustomBtn>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Second group">
                            <CustomBtn variant="eraser" 
                                onClick={() => {   
                                    enableEraser("20");
                                }}> 
                                <img style={{height:"22px"}} src={iconLg}/>
                            </CustomBtn>
                        </ButtonGroup>
                        <ButtonGroup className="mr-2" aria-label="Third group">
                            <CustomBtn variant="eraser" 
                                onClick={() => {   
                                    enableEraser("15");
                                }}> 
                                <img style={{height:"15px"}} src={iconLg}/>
                            </CustomBtn>
                        </ButtonGroup>
                    </ButtonWrapper>
                </DropdownButton>
                </Col> 
                <Col>
                    <Button variant="outline-danger" 
                    onClick = {() => {
                        saveableCanvas.current.clear();
                    }}>Erase All</Button>
                </Col>
                 
            </Row>
        </Container>
        
        </>
        
    );
}

export default CanvasPage;