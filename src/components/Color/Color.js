import React, { useState, useEffect } from "react";
import ColorPallet from "./ColorPallet";

const Color = ({
  rgb,
  weight,
  index,
  hexColor,
  setColorPallet,
  colorPallet,
}) => {
  const [alertCopied, setAlertCopied] = useState(false);
  const [alertAdd, setAlertAdd] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const bcg = rgb.join(",");
  const hexValue = `#${hexColor}`;

  // Display modal for 2 seconds
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlertCopied(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [alertCopied]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlertAdd(false);
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [alertAdd]);

  // Copy to clipboard
  const handleClickCopied = () => {
    setAlertCopied(true);
    navigator.clipboard.writeText(hexValue);
  };
  const handleClickAdd = () => {
    setAlertAdd(true);
    setColorPallet([
      ...colorPallet,
      { rgb, weight, index, hexColor, setColorPallet, colorPallet },
    ]);
  };

  return (
    <article
      onClick={() => {
        setIsHovered(!isHovered);
      }}
      style={{
        backgroundColor: `rgb(${bcg})`,
      }}
      className={`color ${index > 10 && "color-light"}`}
    >
      <p className="percent-value">Weight: {weight}%</p>
      <p>{hexValue}</p>
      {isHovered && (
        <>
          <button onClick={handleClickCopied}>Copy</button>
          <button onClick={handleClickAdd}>Add </button>
        </>
      )}
      {alertCopied && <p className="alert">Copied to clipboard</p>}
      {alertAdd && <p className="alert">Added to pallet</p>}
    </article>
  );
};

export default Color;
