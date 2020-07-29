import React, { useState } from "react";
import StepBar from "./components/StepBar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Landingpage from "./components/Landingpage";
import Intro from "./components/Intro";
import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import Question3 from "./components/Question3";
import Question4 from "./components/Question4";
import Question5 from "./components/Question5";
import Question6 from "./components/Question6";
import Result from "./components/Result";

function App() {
  
  const [condition, setCondition] = useState({
    space: '',
    light: '',
    humidity: '',
    temperature: '',
    size: '',
  })

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact>
            <Landingpage />
          </Route>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/q1">
            <StepBar>
              <Question1 onClick={(name, value)=>{
                setCondition({...condition, [name]: value})
              }}/>
            </StepBar>
          </Route>
          <Route path="/q2">
            <StepBar>
              <Question2 onClick={(name, value)=>{
                setCondition({...condition, [name]: value})
              }}/>
            </StepBar>
          </Route>
          <Route path="/q3">
            <StepBar>
              <Question3 onClick={(name, value)=>{
                setCondition({...condition, [name]: value})
              }}/>
            </StepBar>
          </Route>
          <Route path="/q4">
            <StepBar>
              <Question4 onClick={(name, value)=>{
                setCondition({...condition, [name]: value})
              }}/>
            </StepBar>
          </Route>
          <Route path="/q5">
            <StepBar>
              <Question5 onClick={(name, value)=>{
                setCondition({...condition, [name]: value})
              }}/>
            </StepBar>
          </Route>
          <Route path="/q6">
            <StepBar>
              <Question6 onClick={(name, value)=>{
                setCondition({...condition, [name]: value})
              }}/>
            </StepBar>
          </Route>
          <Route path="/result">
            <Result condition={condition}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
