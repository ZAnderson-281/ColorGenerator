import React from "react";
import Color from "../Color/Color";
import ColorPalletHeader from "./ColorPalletHeader";
function ColorPallet({
  colorPallet,
  setColorPallet,
  palletName,
  setPalletName,
}) {
  return (
    <section className="color-pallet">
      <ColorPalletHeader
        palletName={palletName}
        setPalletName={setPalletName}
      />
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
