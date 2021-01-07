import React, { useState, useEffect } from "react";

const Color = ({ rgb, weight, index, hexColor }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">Weight: {weight}%</p>
      <p>#{hexValue}</p>
    </article>
  );
};

export default Color;
