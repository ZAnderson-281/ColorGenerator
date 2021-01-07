import React, { useEffect } from "react";
import Values from "values.js";

function Header({ color, setColor, setColorList }) {
  // Set State

  useEffect(() => {
    try {
      let colors;

      if (!color.includes("#")) {
        colors = new Values(`#${color}`).all(10);
      } else {
        colors = new Values(color).all(10);
      }
      setColorList(colors);
    } catch (error) {
      console.log(error);
    }
  }, [color]);

  const handleInput = (e) => {
    let input = e.target.value;
    setColor(input);
  };

  return (
    <>
      <section className="container">
        <h3>Color Picker</h3>
        <form>
          <input
            type="text"
            value={color}
            onChange={handleInput}
            placeholder="#Hex Code"
            // className={isError ? "error" : null}
          />
        </form>
      </section>
    </>
  );
}

export default Header;
