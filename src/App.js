import React, { useState } from "react";
import Color from "./Color";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [isError, setIsError] = useState(false);
  const [colorList, setColorList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setIsError(false);
      // create array of colors from values.js
      let colors = new Values(color).all(10);
      setColorList(colors);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Picker</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#f15025"
            className={isError ? "error" : null}
          />
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </section>
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
