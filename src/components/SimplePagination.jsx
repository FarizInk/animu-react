import React from "react";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  }
}));

export default function SimplePagination(props) {
  const classes = useStyles();
  const pageNumber = props.pageNumber;
  const pageType = props.pageType;

  return (
    <div style={{ textAlign: "right", marginBottom: 12, marginRight: -8 }}>
      {pageNumber === "1" ? (
        ""
      ) : (
        <Link to={`/top/${pageType}/${parseInt(pageNumber) - 1}`}>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            <ArrowBack className={classes.leftIcon} />
            PREV
          </Button>
        </Link>
      )}
      <Link to={`/top/${pageType}/${parseInt(pageNumber) + 1}`}>
        <Button variant="contained" color="primary" className={classes.button}>
          NEXT
          <ArrowForward className={classes.rightIcon} />
        </Button>
      </Link>
    </div>
  );
}
