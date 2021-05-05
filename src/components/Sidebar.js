import React from "react";
import "../assets/Sidebar.css";
import logo from "../assets/logo_piramide2.png";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    color: "#fff",
    // maxWidth: 360,
    // backgroundColor: theme.palette.background.paper,
  },
}));

function Sidebar() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <div className="sidebar">
      <div className="sidebar_title">
        <img className="logo" src={logo} alt="" />
        <p className="title ">PIRAMIDE SEGUROS</p>
      </div>
      <div className={classes.root}>
        <List component="nav" aria-label="main mailbox folders">
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={(event) => handleListItemClick(event, 0)}
          >
            <ListItemIcon>
              <InboxIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="INICIO" />
          </ListItem>
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={(event) => handleListItemClick(event, 1)}
          >
            <ListItemIcon>
              <DraftsIcon style={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="TICKETS" />
          </ListItem>
        </List>
      </div>
    </div>
  );
}

export default Sidebar;
