import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import axios from "axios";
import Button from "@material-ui/core/Button";
import ArrowForward from "@material-ui/icons/ArrowForward";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";

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
    width: 151
  },
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

function TopAnimePage(props) {
  const classes = useStyles();
  const dataState = {
    data: {},
    loading: true
  };
  const pageState = '';
  const [data, setData] = useState(dataState);
  const [page, setPage] = useState(pageState);

  const getData = async (type, page) => {
    await axios(`https://api.jikan.moe/v3/top/anime/${page}/${type}`)
      .then(function(response) {
        setData(response.data);
      })
      .catch(function(error) {
        console.log(error);
        setData('')
      });
  };

  function checkpage() {
    console.log(page);
  }

  useEffect(() => {
    if (page != props.match.params.type + '/' + props.match.params.page) {
      getData(props.match.params.type, props.match.params.page);
      setPage(props.match.params.type + '/' + props.match.params.page)
      // console.log(props.match.params.type + '/' + props.match.params.page);
    } else {
      console.log('page yang sama');
    }
    // checkpage()
  });

  function handleNextPage() {
    setData({
      data: {},
      loading: true
    });
    window.scrollTo(0, 0);
    getData(props.match.params.type, parseInt(props.match.params.page) + 1);
    console.log(parseInt(props.match.params.page) + 1);
  }

  function handlePrevPage() {
    setData({
      data: {},
      loading: true
    });
    window.scrollTo(0, 0);
    getData(props.match.params.type, parseInt(props.match.params.page) - 1);
    console.log(parseInt(props.match.params.page) - 1);
  }

  return data.loading ? (
    <div>Loading...</div>
  ) : ((data == '') ? (
    <center><h1> Data Not Found. </h1></center>
  ) : (
    <div>
      {data.top.map((anime, index) => (
        <Card className={classes.card} key={anime.rank}>
          <CardMedia
            className={classes.cover}
            image={anime.image_url}
            title={anime.title}
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Chip label={`Rank ` + anime.rank} className={classes.chip} />
              <Typography component="h5" variant="h5">
                {anime.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                Start : {anime.start_date}
              </Typography>
            </CardContent>
          </div>
        </Card>
      ))}
      <center>
        {props.match.params.page == 1 ? (
          ""
        ) : (
          <Link
            to={`/top/${props.match.params.type}/${parseInt(
              props.match.params.page
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
          to={`/top/${props.match.params.type}/${parseInt(
            props.match.params.page
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
      </center>
    </div>
  ));
}

export default TopAnimePage;
