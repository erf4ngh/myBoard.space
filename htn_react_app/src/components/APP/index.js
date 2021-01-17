import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from "../HOMEPAGE/index.jsx";
import CanvasPage from "../CANVAS/index.jsx";
import StudentCanvasView from "../STUDENT_CANVAS/index.jsx";
import UserContextProvider from "../../libs/contextLibs";
import SelectPage from "../SELECT_ROLE/index.jsx";



const App = () => {
  return (
    <UserContextProvider>
      <Router basename='/'>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/canvas" component={CanvasPage}/>
            <Route path="/student" component={StudentCanvasView}/>
            <Route path="/select-role" component={SelectPage}/>
          </Switch>
        </div>
      </Router>    
    </UserContextProvider>
  );
}

export default App;
