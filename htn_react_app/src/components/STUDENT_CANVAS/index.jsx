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
import app from "../../firebase";

const StudentCanvasView = () => {
    const db = app.database();

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
        </>
    )
}

export default StudentCanvasView;