import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { ArrowBack, ArrowForward } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Button
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  card: {
    display: "flex",
    minHeight: 215,
    marginBottom: 22
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151,
    minHeight: 215
  },
  chip: {
    margin: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(1)
  },
  leftIcon: {
    marginRight: theme.spacing(1)
  },
  rightIcon: {
    marginLeft: theme.spacing(1)
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const styles = {
  link: {
    textDecoration: "none"
  }
};

function TopAnimePage(props) {  
  const pageType = props.match.params.type;
  const pageNumber = props.match.params.page;
  const classes = useStyles();
  const dataState = {
    data: {},
    loading: true
  };
  const pageState = null;
  const [data, setData] = useState(dataState);
  const [page, setPage] = useState(pageState);

  const getData = async (type, page) => {
    setData({
      data: {},
      loading: true
    });
    window.scrollTo(0, 0);
    await axios(`${process.env.REACT_APP_API_URL}top/anime/${page}/${type}`)
      .then(function(response) {
        setData(response.data);
      })
      .catch(function(error) {
        console.log(error);
        setData("");
      });
  };

  useEffect(() => {
    document.title = "Top " + pageType.charAt(0).toUpperCase() + pageType.slice(1) + " - " + process.env.REACT_APP_NAME;
    checkPage();
  });

  function checkPage() {
    if (page !== pageType + "/" + pageNumber) {
      getData(pageType, pageNumber);
      setPage(pageType + "/" + pageNumber);
      // console.log(pageType + '/' + pageNumber);
    } else {
      // console.log("page yang sama");
    }
  }

  function handleNextPage() {
    getData(pageType, parseInt(pageNumber) + 1);
    console.log(parseInt(pageNumber) + 1);
  }

  function handlePrevPage() {
    getData(pageType, parseInt(pageNumber) - 1);
    console.log(parseInt(pageNumber) - 1);
  }

  const button = (
    <div style={{ marginBottom: 12, marginLeft: -8 }}>
      <Link to="/top/upcoming/1" style={styles.link}>
        <Button
          variant={
            pageType === "upcoming" ? "outlined" : "contained"
          }
          size="medium"
          color="primary"
          className={classes.margin}
        >
          UPCOMING
        </Button>
      </Link>
      <Link to="/top/airing/1" style={styles.link}>
        <Button
          variant={
            pageType === "airing" ? "outlined" : "contained"
          }
          size="medium"
          color="primary"
          className={classes.margin}
        >
          AIRING
        </Button>
      </Link>
      <Link to="/top/tv/1" style={styles.link}>
        <Button
          variant={pageType === "tv" ? "outlined" : "contained"}
          size="medium"
          color="primary"
          className={classes.margin}
        >
          TV
        </Button>
      </Link>
      <Link to="/top/movie/1" style={styles.link}>
        <Button
          variant={
            pageType === "movie" ? "outlined" : "contained"
          }
          size="medium"
          color="primary"
          className={classes.margin}
        >
          MOVIE
        </Button>
      </Link>
      <Link to="/top/ova/1" style={styles.link}>
        <Button
          variant={pageType === "ova" ? "outlined" : "contained"}
          size="medium"
          color="primary"
          className={classes.margin}
        >
          OVA
        </Button>
      </Link>
      <Link to="/top/special/1" style={styles.link}>
        <Button
          variant={
            pageType === "special" ? "outlined" : "contained"
          }
          size="medium"
          color="primary"
          className={classes.margin}
        >
          SPECIAL
        </Button>
      </Link>
    </div>
  );

  return (
    <div>
      {button}
      {data.loading ? (
        <div>Loading...</div>
      ) : data === "" ? (
        <center>
          <h1> Data Not Found. </h1>
        </center>
      ) : (
        <div>
          <Grid container spacing={3}>
            {data.top.map((anime, index) => (
              <Grid item md={6} sm={12} xs={12} key={anime.rank}>
                <Card className={classes.card}>
                  <div>
                    <CardMedia
                      className={classes.cover}
                      image={anime.image_url}
                      title={anime.title}
                    />
                  </div>
                  <div className={classes.details}>
                    <CardContent className={classes.content}>
                      <Chip
                        label={<b>Rank : {anime.rank}</b>}
                        color="primary"
                        className={classes.chip}
                        style={{ marginLeft: 0 }}
                      />
                      <Chip
                        label={`Score : ` + anime.score}
                        className={classes.chip}
                      />
                      <Typography component="h5" variant="h5">
                        <b>{anime.title}</b>
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {anime.type}
                        {pageType !== "upcoming"
                          ? ", " + anime.episodes + " Episodes"
                          : ""}
                      </Typography>
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div
            style={{ textAlign: "right", marginBottom: 12, marginRight: -8 }}
          >
            {pageNumber === '1' ? (
              ""
            ) : (
              <Link
                to={`/top/${pageType}/${parseInt(
                  pageNumber
                ) - 1}`}
              >
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlePrevPage}
                  className={classes.button}
                >
                  <ArrowBack className={classes.leftIcon} />
                  PREV
                </Button>
              </Link>
            )}
            <Link
              to={`/top/${pageType}/${parseInt(
                pageNumber
              ) + 1}`}
            >
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handleNextPage}
              >
                NEXT
                <ArrowForward className={classes.rightIcon} />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default TopAnimePage;
