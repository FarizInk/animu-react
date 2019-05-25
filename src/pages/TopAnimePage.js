import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import axios from "axios";

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
  }
}));

function MediaControlCard(props) {
  const classes = useStyles();
  const dataState = {
    data: {},
    loading: true
  };
  const [data, setData] = useState(dataState);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(
        `https://api.jikan.moe/v3/top/anime/${props.match.params.page}/${props.match.params.type}`
      );

      setData(data);
    };
    getData();
  }, []);

  return data.loading ? (
    <div>Loading...</div>
  ) : (
    <div>
      {data.top.map((anime, index) => (
          <Card className={classes.card}>
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
      
    </div>
  );
}

export default MediaControlCard;
