import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Search from "@material-ui/icons/Search";
import Dialog from "@material-ui/core/Dialog";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import ScheduleIcon from "@material-ui/icons/Schedule";
import LabelIcon from "@material-ui/icons/Label";
import EventIcon from "@material-ui/icons/Event";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    marginLeft: 12
  },
  titleDialog: {
    marginLeft: theme.spacing(2),
    flex: 1
  },
  list: {
    width: 250
  }
}));

const listLinkStyle = {
  color: "#353535",
  textDecoration: "none"
};

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Nav() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [side]: open });
  };

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={toggleDrawer("left", true)}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" style={{ color:"white", textDecoration:"none" }}>
              ANIMU
            </Link>
          </Typography>
          <IconButton color="inherit" onClick={handleClickOpen}>
            <Search />
          </IconButton>
        </Toolbar>
      </AppBar>

      <SwipeableDrawer
        open={state.left}
        onClose={toggleDrawer("left", false)}
        onOpen={toggleDrawer("left", true)}
      >
        <div
          className={classes.list}
          role="presentation"
          onClick={toggleDrawer("left", false)}
          onKeyDown={toggleDrawer("left", false)}
        >
          <List>
            <Link to="/top/upcoming/1" style={listLinkStyle}>
              <ListItem button>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Top" />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link to="/schedule" style={listLinkStyle}>
              <ListItem button>
                <ListItemIcon>
                  <ScheduleIcon />
                </ListItemIcon>
                <ListItemText primary="Schedule" />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link to="/genre" style={listLinkStyle}>
              <ListItem button>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText primary="Genre" />
              </ListItem>
            </Link>
          </List>
          <List>
            <Link to="/season" style={listLinkStyle}>
              <ListItem button>
                <ListItemIcon>
                  <EventIcon />
                </ListItemIcon>
                <ListItemText primary="Season" />
              </ListItem>
            </Link>
          </List>
        </div>
      </SwipeableDrawer>

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="Close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.titleDialog}>
              Search
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        </List>
      </Dialog>
    </div>
  );
}
