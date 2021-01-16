import React, { useState }from "react";
import ReactDOM from "react-dom";
import CanvasDraw from "react-canvas-draw";
import styled from "styled-components";




const Canvas = (props) => {
    return (
        <CanvasDraw 
            canvasWidth="80%"
            canvasHeight="600px"
            hideGrid={props.grid}
            brushRadius={props.brushRad}
            lazyRadius="0"
            brushColor={props.paintColour}/>
    );
}

export default Canvas;