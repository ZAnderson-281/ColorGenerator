import React, { useState } from "react";

import Header from "./components/Header/Header";
import ColorContainer from "./components/Color/ColorContainer";

import Values from "values.js";
import ColorPallet from "./components/ColorPallet/ColorPallet";
import { Collapse } from "@material-ui/core";

function App() {
  const [color, setColor] = useState("");
  const [colorPallet, setColorPallet] = useState([]);
  const [ammount, setAmmount] = useState(10);
  const [colorList, setColorList] = useState(new Values("#F00").all(ammount));
  const [expanded, setExpanded] = useState(false);
  const [palletName, setPalletName] = useState("Pallet Name");

  return (
    <>
      <Header
        color={color}
        setColor={setColor}
        setColorList={setColorList}
        ammount={ammount}
        setAmmount={setAmmount}
        expanded={expanded}
        setExpanded={setExpanded}
      />

      {/* COLOR PALLET */}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {colorPallet.length ? (
          <ColorPallet
            colorList={colorList}
            setColorPallet={setColorPallet}
            colorPallet={colorPallet}
            palletName={palletName}
            setPalletName={setPalletName}
          />
        ) : (
          <p>No Active pallet</p>
        )}
      </Collapse>

      {/* General Pallet */}
      {color ? (
        <div className="color-container">
          <ColorContainer
            containerName={color}
            colorList={colorList}
            setColorPallet={setColorPallet}
            colorPallet={colorPallet}
          />
        </div>
      ) : (
        <div className="color-container">
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
        </div>
      )}
    </>
  );
}

export default App;
