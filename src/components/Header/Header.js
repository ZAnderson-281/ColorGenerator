import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Input,
  Button,
  makeStyles,
  IconButton,
  Collapse,
} from "@material-ui/core";
import Values from "values.js";

const styles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#ffffff",
  },
  iconMenu: {
    opacity: "0.3",
    backgroundColor: "#e5e5e5",
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
        <Collapse in={menuExpanded} timeout="auto" unmountOnExit>
          <Toolbar className={classes.iconMenu}>
            <IconButton
              onClick={() => {
                setExpanded(!expanded);
              }}
            >
              <i className={`${classes.headerBtn} fas fa-palette`}></i>
            </IconButton>
          </Toolbar>
        </Collapse>
      </AppBar>
    </>
  );
}

export default Header;
