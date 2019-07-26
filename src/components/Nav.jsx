import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  SwipeableDrawer
} from "@material-ui/core";
import { ExpandMore } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../css/Nav.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  fullList: {
    width: "auto"
  }
}));

const Nav = props => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [state, setState] = React.useState({
    top: false
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

  const fullList = side => (
    <div
      className={classes.fullList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <Link
        to={`/top/${props.data.top.type}/${props.data.top.page}`}
        className="link"
      >
        <MenuItem onClick={handleClose}>Top</MenuItem>
      </Link>
      <Link to="/schedule" className="link">
        <MenuItem onClick={handleClose}>Schedule</MenuItem>
      </Link>
      <Link to="/genre" className="link">
        <MenuItem onClick={handleClose}>Genre</MenuItem>
      </Link>
      <Link to="/season" className="link">
        <MenuItem onClick={handleClose}>Season</MenuItem>
      </Link>
    </div>
  );

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className="title">
              {process.env.REACT_APP_NAME}
            </Link>
          </Typography>
          <div>
            <IconButton
              aria-label="More"
              aria-controls="expand-more"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className="icon-desktop"
            >
              <ExpandMore />
            </IconButton>
            {/* Mobile Version */}
            <IconButton
              aria-label="More"
              onClick={toggleDrawer("top", true)}
              color="inherit"
              className="icon-mobile"
            >
              <ExpandMore />
            </IconButton>
            {/* END Mobile Version */}
            <Menu
              id="expand-more"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right"
              }}
              open={open}
              onClose={handleClose}
            >
              <Link
                to={`/top/${props.data.top.type}/${props.data.top.page}`}
                className="link"
              >
                <MenuItem onClick={handleClose}>Top</MenuItem>
              </Link>
              <Link to="/schedule" className="link">
                <MenuItem onClick={handleClose}>Schedule</MenuItem>
              </Link>
              <Link to="/genre" className="link">
                <MenuItem onClick={handleClose}>Genre</MenuItem>
              </Link>
              <Link to="/season" className="link">
                <MenuItem onClick={handleClose}>Season</MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <SwipeableDrawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
        className="swipeable-menu"
      >
        {fullList("top")}
      </SwipeableDrawer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state
  };
};

export default connect(mapStateToProps)(Nav);
