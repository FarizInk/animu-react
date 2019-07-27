import React from "react";
import {
  Card,
  CardMedia,
  Chip,
  CardContent,
  Typography,
  CardActionArea,
  Button,
  CardActions
} from "@material-ui/core";
import "../css/SimpleCard.css";

export const VerticalSimpleCard = props => {
  const data = props.data;
  let score;
  if (data.score !== 0) {
    score = <Chip label={`Score : ` + data.score} className="score" />;
  }

  return (
    <Card className="vertical-card">
      <CardMedia
        className="vertical-cover"
        image={data.image_url}
        title={data.title}
      />
      <div className="vertical-details">
        <div style={{ marginLeft: 12, marginTop: 12 }}>
          <Chip label={<b>{data.rank}</b>} color="primary" className="rank" />
          {score}
        </div>
        <CardContent className="vertical-content">
          <Typography component="h5" variant="h5" className="card-title">
            {data.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {data.type}
            {data.episodes !== null ? ", " + data.episodes + " Episodes" : ""}
          </Typography>
        </CardContent>
        <div className="vertical-control">
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </div>
      </div>
    </Card>
  );
};

export const HorizontalSimpleCard = props => {
  const data = props.data;
  let score;
  if (data.score !== 0) {
    score = <Chip label={`Score : ` + data.score} className="score" />;
  }

  return (
    <Card className="horizontal-card">
      <div className="top-side">
        <Chip label={<b>{data.rank}</b>} color="primary" className="rank" />
        {score}
      </div>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.title}
          className="horizontal-cover"
          image={data.image_url}
          title={data.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="card-title"
          >
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.type}
            {data.episodes !== null ? ", " + data.episodes + " Episodes" : ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};
