import React, { useState, useEffect } from "react";
import Color from "../Color/Color";

import Values from "values.js";

function Header({
  color,
  setColor,
  isError,
  setIsError,
  colorList,
  setColorList,
}) {
  // Set State

  useEffect(() => {
    try {
      setIsError(false);
      // create array of colors from values.js
      let colors = new Values(color).all(10);
      setColorList(colors);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }, [color]);

  return (
    <>
      <section className="container">
        <h3>Color Picker</h3>
        <form>
          <input
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder="#0FF0FF"
            className={isError ? "error" : null}
          />
        </form>
      </section>
    </>
  );
}

export default Header;
