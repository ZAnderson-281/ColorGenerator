import React, { useState } from "react";
import { ChromePicker } from "react-color";

function Picker({ setColor, color }) {
  const handleChangeComplete = (color) => {
    setColor(color.hex);
  };

  return (
    <>
      <ChromePicker color={color} onChange={handleChangeComplete} />
    </>
  );
}

export default Picker;
