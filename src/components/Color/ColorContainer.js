import React from "react";
import Color from "./Color";

function ColorContainer({ colorList, containerName }) {
  return (
    <section>
      <h3>{containerName}</h3>
      <div className="colors">
        {colorList.map((color, index) => {
          return (
            <Color key={index} {...color} index={index} hexColor={color.hex} />
          );
        })}
      </div>
    </section>
  );
}

export default ColorContainer;
