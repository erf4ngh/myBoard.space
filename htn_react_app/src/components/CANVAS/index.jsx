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
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import iconLg from "../../assets/eraser-icon-lg.svg";
import app from "../../firebase";

const CanvasWrapper = styled.div`
    border: 5px solid red;
    margin-bottom:10px;
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
        border: 1px solid black;
    }

    &.btn-eraser{
        padding:0;
        display:block;
        text-align:center;
        border: 1px solid black;
    }
`

const ButtonWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-around;
`

const CanvasPage = () => {
    const db = app.database();

    const [brushColour, setBrushColour] = useState("#000000");
    const [brushSize, setBrushSize] = useState("1");
    const [gridHidden, setGridHidden] = useState(true);
    const [eraserMode, setEraserMode] = useState(false);

    const enableEraser = () => {
        setEraserMode(true);
    }

    const disableEraser = () => {
        setEraserMode(false);
    }

    const saveableCanvas = useRef(null);

    const pushData = (lineData) => {
        db.ref('folder1/helloWord').set({
            data: {lineData}
        });
    }

    return (
        <>
        <CanvasWrapper>
                <CanvasDraw 
                    onChange={() => {
                        pushData(saveableCanvas.current.getSaveData());
                    }}
                    ref={saveableCanvas}
                    canvasWidth="100%"
                    canvasHeight="600px"
                    hideGrid={gridHidden}
                    brushRadius={brushSize}
                    lazyRadius='0'
                    brushColor={eraserMode ? "#FFFFFF" : brushColour}/>
        </CanvasWrapper>
        <Container>
            <Row md={5}> 
                <Col sm={4}>
                    <ButtonWrapper>
                        <ButtonGroup className="mr-2" aria-label="Third group">
                            <CustomBtn variant="red" 
                            onClick={() => {
                            if (eraserMode){
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
                                    setBrushColour("#B221C0");
                                }
                                else {
                                    setBrushColour("#B221C0");
                                }}}></CustomBtn>
                        </ButtonGroup>
                    </ButtonWrapper>
                </Col>
                <Col sm={4}>
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
                </Col>  

                <Col sm={4}>
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                    <ToggleButton value={1} onClick={disableEraser}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-brush" viewBox="0 0 16 16">
                            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.117 8.117 0 0 1-3.078.132 3.658 3.658 0 0 1-.563-.135 1.382 1.382 0 0 1-.465-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.393-.197.625-.453.867-.826.094-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.2-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.175-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04zM4.705 11.912a1.23 1.23 0 0 0-.419-.1c-.247-.013-.574.05-.88.479a11.01 11.01 0 0 0-.5.777l-.104.177c-.107.181-.213.362-.32.528-.206.317-.438.61-.76.861a7.127 7.127 0 0 0 2.657-.12c.559-.139.843-.569.993-1.06a3.121 3.121 0 0 0 .126-.75l-.793-.792zm1.44.026c.12-.04.277-.1.458-.183a5.068 5.068 0 0 0 1.535-1.1c1.9-1.996 4.412-5.57 6.052-8.631-2.591 1.927-5.566 4.66-7.302 6.792-.442.543-.796 1.243-1.042 1.826a11.507 11.507 0 0 0-.276.721l.575.575zm-4.973 3.04l.007-.005a.031.031 0 0 1-.007.004zm3.582-3.043l.002.001h-.002z"/>
                        </svg>
                    </ToggleButton>
                    <ToggleButton value={2} onClick={enableEraser}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-eraser" viewBox="0 0 16 16">
                            <path d="M8.086 2.207a2 2 0 0 1 2.828 0l3.879 3.879a2 2 0 0 1 0 2.828l-5.5 5.5A2 2 0 0 1 7.879 15H5.12a2 2 0 0 1-1.414-.586l-2.5-2.5a2 2 0 0 1 0-2.828l6.879-6.879zm2.121.707a1 1 0 0 0-1.414 0L4.16 7.547l5.293 5.293 4.633-4.633a1 1 0 0 0 0-1.414l-3.879-3.879zM8.746 13.547L3.453 8.254 1.914 9.793a1 1 0 0 0 0 1.414l2.5 2.5a1 1 0 0 0 .707.293H7.88a1 1 0 0 0 .707-.293l.16-.16z"/>
                        </svg>
                    </ToggleButton>
                </ToggleButtonGroup>
                {/* <DropdownButton size="lg" as={ButtonGroup} title="Eraser" id="bg-vertical-dropdown-1">
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
                </DropdownButton> */}
                </Col> 
                <Col>
                    <Button size="lg" variant="outline-danger" 
                    onClick = {() => {
                        saveableCanvas.current.clear();
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
                            <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </Button>
                    <Button size="lg" variant="outline-danger" 
                    onClick = {() => {
                        saveableCanvas.current.undo();
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                        </svg>
                  </Button>
                </Col>
                 
            </Row>
        </Container>
        
        </>
        
    );
}

export default CanvasPage;