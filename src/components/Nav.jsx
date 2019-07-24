import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const titleStyle = {
  color: 'white',
  textDecoration: "none"
};

const linkStyle = {
  color: 'black',
  textDecoration: "none",
  textTransform: 'uppercase',
  fontWeight: 500
};

const Nav = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
            <Link to="/" style={titleStyle}>
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
            >
              <ExpandMore />
            </IconButton>
            <Menu
              id="expand-more"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              <Link to={`/top/${props.data.top.type}/${props.data.top.page}`} style={linkStyle}>
                <MenuItem onClick={handleClose}>Top</MenuItem>
              </Link>
              <Link to="/schedule" style={linkStyle}>
                <MenuItem onClick={handleClose}>Schedule</MenuItem>
              </Link>
              <Link to="/genre" style={linkStyle}>
                <MenuItem onClick={handleClose}>Genre</MenuItem>
              </Link>
              <Link to="/season" style={linkStyle}>
                <MenuItem onClick={handleClose}>Season</MenuItem>
              </Link>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      data: state
  }
}

export default connect(mapStateToProps)(Nav)