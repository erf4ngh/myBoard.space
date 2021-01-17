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

const CanvasWrapper = styled.div`
    border: 5px solid red;
    margin-bottom:10px;
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
        <>
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
        </>
    )
}

export default StudentCanvasView;