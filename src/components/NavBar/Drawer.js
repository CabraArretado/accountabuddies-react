import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";


import { Link, Route, Redirect, useHistory, withRouter } from 'react-router-dom';

const useStyles = makeStyles({
  drawer: {
    width: "300px"
  }
});

const SimpleDrawer = props => {
  const { history, drawerOpen, switchDrawer } = props;
  const classes = useStyles();

  const itemsList = [
    {
      text: "Home",
      icon: <InboxIcon />,
      onClick: () => {
        switchDrawer()
        history.push("/")
      }
    },
    {
      text: "Search Groups",
      icon: <MailIcon />,
      onClick: () => {
        switchDrawer()
        history.push("/groups")
      }
    },
    {
      text: "My Groups",
      icon: <MailIcon />,
      onClick: () => {
        switchDrawer()
        history.push("/my_groups")
      }
    }
  ];
  return (
    <Drawer open={drawerOpen} className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default withRouter(SimpleDrawer);