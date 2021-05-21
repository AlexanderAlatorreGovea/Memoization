import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import DemoOutput from "./DEMO/DemoOutput";
import "./App.css";

//useCall back if for functions to be saved in memomory
//to be stored for execution

function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setallowToggle] = useState(false);

  const toggleParra = useCallback(() => {
    if(allowToggle) {
      setShowPara((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setallowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showPara} />
      <Button onClick={allowToggleHandler}>Allow toggle</Button>
      <Button onClick={toggleParra}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
