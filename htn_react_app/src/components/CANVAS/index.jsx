import React, {useState} from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Canvas from "./canvas";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Nav from "react-bootstrap/Nav";

const CanvasPage = () => {
    const [brushColour, setBrushColour] = useState("#000000");
    const [brushSize, setBrushSize] = useState("1");
    const [gridHidden, setGridHidden] = useState(true);
    const [eraserMode, setEraserMode] = useState(false);

    const enableEraser = () => {
        setBrushColour("#FFFFFF");
        setEraserMode(true);
    }

    return (
        <>
        <ButtonGroup size="lg" vertical>
        <Button onClick={enableEraser}>ERASER</Button>
        <Button>Button</Button>

        <DropdownButton as={ButtonGroup} title="Colour" id="bg-vertical-dropdown-1">
            <Dropdown.Item onClick={() => {
                if (eraserMode){
                    setEraserMode(false);
                    setBrushColour("#FF0000");
                }
                else {
                    setBrushColour("#FF0000");
                }
                
            }}>RED</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>

        <Button>Button</Button>
        <Button>Button</Button>

        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-2">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>

        <DropdownButton as={ButtonGroup} title="Dropdown" id="bg-vertical-dropdown-3">
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
        </DropdownButton>
        </ButtonGroup>

        <Canvas
            paintColour = {eraserMode ? "#FFFFFF" : brushColour}
            brushRad = {eraserMode ? "10" : brushSize}
            grid = {gridHidden}/>
        </>
        
    );
}

export default CanvasPage;