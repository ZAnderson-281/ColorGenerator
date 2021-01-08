import React, { useState, useEffect } from "react";
import Values from "values.js";

function Header({ color, setColor, setColorList, ammount, setAmmount }) {
  // Set State
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    try {
      let colors;

      if (!color.includes("#")) {
        colors = new Values(`#${color}`).all(ammount);
      } else {
        colors = new Values(color).all(ammount);
      }
      setColorList(colors);
    } catch (error) {
      console.log(error);
    }
  }, [color, ammount]);

  const handleInput = (e) => {
    let input = e.target.value;
    setColor(input);
  };
  const handleToggleSpectrum = (e) => {
    e.preventDefault();
    if (isToggled) {
      setAmmount(1);
    } else {
      setAmmount(10);
    }
    setIsToggled(!isToggled);
  };

  return (
    <>
      <section className="container">
        <h3>Color Picker</h3>
        <input
          type="text"
          value={color}
          onChange={handleInput}
          placeholder="#Hex Code"
          // className={isError ? "error" : null}
        />
        <button className="btn" onClick={handleToggleSpectrum}>
          Full Spectrum
        </button>
      </section>
    </>
  );
}

export default Header;
