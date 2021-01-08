import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Input,
  Button,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import Values from "values.js";

const styles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#ffffff",
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
    setExpanded(!expanded);
  };

  return (
    <>
      <AppBar className={classes.header}>
        <Toolbar>
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
          <Button className={classes.headerBtn} onClick={handleToggleSpectrum}>
            Full Spectrum
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Header;
