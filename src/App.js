import React, { useState } from "react";

import Header from "./components/Header/Header";
import ColorContainer from "./components/Color/ColorContainer";

import Values from "values.js";
import ColorPallet from "./components/Color/ColorPallet";

function App() {
  const [color, setColor] = useState("");
  const [colorPallet, setColorPallet] = useState([]);
  const [ammount, setAmmount] = useState(10);
  const [colorList, setColorList] = useState(new Values("#F00").all(ammount));

  return (
    <>
      <Header
        color={color}
        setColor={setColor}
        setColorList={setColorList}
        ammount={ammount}
        setAmmount={setAmmount}
      />
      {colorPallet.length ? (
        <ColorPallet
          colorList={colorList}
          setColorPallet={setColorPallet}
          colorPallet={colorPallet}
        />
      ) : (
        <p>No Active pallet</p>
      )}
      {color ? (
        <ColorContainer
          containerName=""
          colorList={colorList}
          setColorPallet={setColorPallet}
          colorPallet={colorPallet}
        />
      ) : (
        <>
          <ColorContainer
            containerName="red"
            colorList={new Values("#F00").all(ammount)}
            setColorPallet={setColorPallet}
            colorPallet={colorPallet}
          />
          <ColorContainer
            containerName="orange"
            colorList={new Values("#FF8C00").all(ammount)}
            setColorPallet={setColorPallet}
            colorPallet={colorPallet}
          />
          <ColorContainer
            containerName="yellow"
            colorList={new Values("#ffff66").all(ammount)}
            setColorPallet={setColorPallet}
            colorPallet={colorPallet}
          />
          <ColorContainer
            containerName="green"
            colorList={new Values("#00ff00").all(ammount)}
            setColorPallet={setColorPallet}
            colorPallet={colorPallet}
          />
          <ColorContainer
            containerName="blue"
            colorList={new Values("#0000FF").all(ammount)}
            setColorPallet={setColorPallet}
            colorPallet={colorPallet}
          />
          <ColorContainer
            containerName="purple"
            colorList={new Values("#8A2BE2").all(ammount)}
            setColorPallet={setColorPallet}
            colorPallet={colorPallet}
          />
        </>
      )}
    </>
  );
}

export default App;
