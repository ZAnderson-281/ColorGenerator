import React from "react";
import Color from "./Color";

function ColorPallet({ colorPallet, setColorPallet }) {
  return (
    <section className="color-pallet">
      <h3>Color Pallet</h3>
      <div className="color">
        {colorPallet.map((color, index) => {
          return (
            <Color
              key={index}
              {...color}
              index={index}
              hexColor={color.hexColor}
              setColorPallet={setColorPallet}
              colorPallet={colorPallet}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ColorPallet;
