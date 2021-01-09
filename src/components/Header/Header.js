import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Input,
  Button,
  makeStyles,
  IconButton,
  Collapse,
  FormControlLabel,
} from "@material-ui/core";
import Values from "values.js";
import Picker from "../ColorPallet/Picker";
import { PurpleSwitch } from "../ComponentStyles/Inputs";

// CSS Styles for material UI
const styles = makeStyles((theme) => ({
  header: {
    background: "transparent",
    boxShadow: "none",
    pointerEvents: "none",
    color: "#2a2e32",
  },
  mainBar: {
    backgroundColor: "#ffffff",
    pointerEvents: "auto",
  },
  colorSelect: {
    pointerEvents: "auto",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    padding: "1rem",
    width: "fit-content",
    height: "fit-content",
  },
  headerBtn: {
    color: "#414141",
    margin: "1rem 1rem",
  },
  headerInput: {
    color: "#414141",
  },
}));

function Header({
  color,
  setColor,
  setColorList,
  ammount,
  setAmmount,
  expanded,
  setExpanded,
}) {
  const classes = styles();

  // Set State
  const [isToggled, setIsToggled] = useState(true);
  const [menuExpanded, setMenuExpanded] = useState(false);

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
  const handleExpandClick = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <>
      <AppBar className={classes.header}>
        {/* Main Head Bar */}
        <Toolbar className={classes.mainBar}>
          <IconButton onClick={handleExpandClick}>
            <i className={`${classes.headerBtn} fas fa-bars`}></i>
          </IconButton>
          <Input
            className={classes.headerInput}
            value={color}
            onChange={handleInput}
            placeholder="#Hex Code"
            fullWidth={true}
          />
        </Toolbar>

        {/* 2nd Menu Bar */}
        <Collapse in={menuExpanded} timeout="auto" unmountOnExit>
          <Toolbar className={classes.colorSelect}>
            <div className="flex">
              <FormControlLabel
                control={
                  <PurpleSwitch
                    onChange={handleToggleSpectrum}
                    name="Full Spectrum"
                  />
                }
                label="Full Spectrum"
              />
              <IconButton
                onClick={() => {
                  setExpanded(!expanded);
                  setMenuExpanded(!menuExpanded);
                }}
              >
                <i className={`${classes.headerBtn} fas fa-palette`}></i>
              </IconButton>
            </div>
            <Picker setColor={setColor} color={color} />
          </Toolbar>
        </Collapse>
      </AppBar>
    </>
  );
}

export default Header;
