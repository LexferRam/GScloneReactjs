import React from "react";
import "../assets/Panelheader.css";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import Switch from "@material-ui/core/Switch";
import WifiIcon from "@material-ui/icons/Wifi";
import BluetoothIcon from "@material-ui/icons/Bluetooth";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Panelheader() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(["wifi"]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div className="header">
      <div className="nav">
        <p>Sistema Gestion de Versiones G-SOLUTIONS.</p>
        <div className="switch">
          <List>
            <ListItem>
              <ListItemText
                id="switch-list-label-wifi"
                primary="Tickets"
                style={{ marginRight: "15px" }}
              />
              <ListItemSecondaryAction>
                <Switch
                  style={{ color: "white" }}
                  edge="end"
                  onChange={handleToggle("wifi")}
                  checked={checked.indexOf("wifi") !== -1}
                  inputProps={{ "aria-labelledby": "switch-list-label-wifi" }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Panelheader;
