import React, { useState } from "react";

import Header from "./components/Header/Header";
import ColorContainer from "./components/Color/ColorContainer";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [ammount, setAmmount] = useState(10);
  const [colorList, setColorList] = useState(new Values("#F00").all(ammount));

  console.log(colorList);
  return (
    <>
      <Header
        color={color}
        setColor={setColor}
        setColorList={setColorList}
        ammount={ammount}
        setAmmount={setAmmount}
      />
      {color ? (
        <ColorContainer containerName="" colorList={colorList} />
      ) : (
        <>
          <ColorContainer
            containerName="red"
            colorList={new Values("#F00").all(ammount)}
          />
          <ColorContainer
            containerName="orange"
            colorList={new Values("#FF8C00").all(ammount)}
          />
          <ColorContainer
            containerName="yellow"
            colorList={new Values("#ffff66").all(ammount)}
          />
          <ColorContainer
            containerName="green"
            colorList={new Values("#00ff00").all(ammount)}
          />
          <ColorContainer
            containerName="blue"
            colorList={new Values("#0000FF").all(ammount)}
          />
          <ColorContainer
            containerName="purple"
            colorList={new Values("#8A2BE2").all(ammount)}
          />
        </>
      )}
    </>
  );
}

export default App;
