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

export default function SimpleCard2(props) {
  const data = props.data;
  let score;
  if (data.score !== 0) {
    score = <Chip label={`Score : ` + data.score} className="score" />;
  }

  return (
    <Card className="card">
      <div className="top-side">
        <Chip label={<b>{data.rank}</b>} color="primary" className="rank" />
        {score}
      </div>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.title}
          className="card-image"
          image={data.image_url}
          title={data.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className="description"
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
}
