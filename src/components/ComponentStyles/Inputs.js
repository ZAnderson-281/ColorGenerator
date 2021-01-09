import { withStyles, InputBase, Switch } from "@material-ui/core";

export const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "transparent",
    border: "none",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    color: "#fff",
    fontSize: "24pt",
    fontWeight: "bold",
    borderRadius: "0px",
    transition: theme.transitions.create(["borderBottom", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderBottom: "4px solid #fff",
    },
  },
}))(InputBase);

export const PurpleSwitch = withStyles({
  switchBase: {
    color: "#68aadc",
    "&$checked": {
      color: "#68aadc",
    },
    "&$checked + $track": {
      backgroundColor: "#c3ddf1",
    },
  },
  checked: {},
  track: {},
})(Switch);
