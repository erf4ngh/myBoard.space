import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Homepage from "../HOMEPAGE/index.jsx";
import CanvasPage from "../CANVAS/index.jsx";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route path="/canvas" component={CanvasPage}/>
        </Switch>
      </div>
    </Router>    
  );
}

export default App;
