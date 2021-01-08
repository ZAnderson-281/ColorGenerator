import React from "react";
import Color from "./Color";

function ColorPallet({ colorList, colorPallet, setColorPallet }) {
  return (
    <section className="color">
      <h3>Color Pallet</h3>
      <artical className="color">
        {colorPallet.map((color, index) => {
          return (
            <Color
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
              setColorPallet={setColorPallet}
              colorPallet={colorPallet}
            />
          );
        })}
      </artical>
    </section>
  );
}

export default ColorPallet;
