import React from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import styled from "styled-components";



const Canvas = () => {
    return (
        <CanvasDraw 
            canvasWidth="80%"
            canvasHeight="600px"
            hideGrid="true"
            brushRadius="1"
            lazyRadius="0"/>
    );
}

export default Canvas;