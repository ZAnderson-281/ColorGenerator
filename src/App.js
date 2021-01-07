import React, { useState } from "react";

import Header from "./components/Header/Header";
import ColorContainer from "./components/Color/ColorContainer";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState(new Values("#F00").all());

  return (
    <>
      <Header color={color} setColor={setColor} setColorList={setColorList} />
      {color ? (
        <ColorContainer containerName="" colorList={colorList} />
      ) : (
        <>
          <ColorContainer
            containerName="red"
            colorList={new Values("#F00").all()}
          />
          <ColorContainer
            containerName="orange"
            colorList={new Values("#FFA500").all()}
          />
          <ColorContainer
            containerName="yellow"
            colorList={new Values("#ffff00").all()}
          />
          <ColorContainer
            containerName="green"
            colorList={new Values("#008000").all()}
          />
          <ColorContainer
            containerName="blue"
            colorList={new Values("#0000FF").all()}
          />
          <ColorContainer
            containerName="purple"
            colorList={new Values("#800080").all()}
          />
        </>
      )}
    </>
  );
}

export default App;
