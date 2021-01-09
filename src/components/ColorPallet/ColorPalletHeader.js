import React, { useState } from "react";
import { BootstrapInput } from "../ComponentStyles/Inputs";
import { Select, MenuItem, makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  palletSelect: {
    minWidth: "8rem",
    marginLeft: "4rem",
    background: "#fff",
  },
}));

function ColorPalletHeader({ palletName, setPalletName }) {
  const [pallet, setPallet] = useState("");
  const classes = styles();

  const handleChange = (event) => {
    setPallet(event.target.value);
  };
  return (
    <div className="color-pallet-header">
      <BootstrapInput
        className={classes.palletName}
        value={palletName}
        onChange={(e) => {
          setPalletName(e.target.value);
        }}
      />
      {/* <Select
        className={classes.palletSelect}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={pallet}
        onChange={handleChange}
      >
        <MenuItem value="New"></MenuItem>
      </Select> */}
    </div>
  );
}

export default ColorPalletHeader;
