import React from "react";
import Header from "./components/Header/Header";
import Color from "./components/Color/Color";
import { useState } from "react";
import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [isError, setIsError] = useState(false);
  const [colorList, setColorList] = useState(new Values("#0ff0ff").all());

  return (
    <>
      <Header
        color={color}
        setColor={setColor}
        isError={isError}
        setIsError={setIsError}
        colorList={colorList}
        setColorList={setColorList}
      />
      <section className="colors">
        {colorList.map((color, index) => {
          return (
            <Color key={index} {...color} index={index} hexColor={color.hex} />
          );
        })}
      </section>
    </>
  );
}

export default App;
