import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Card, CardMedia, Chip, CardContent, Typography, CardActionArea, Button, CardActions } from '@material-ui/core'
import '../css/SimpleCard.css'

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
    card2: {
        maxWidth: "30%",
        margin: 10
    },
}));

function SimpleCard1(props) {
    const classes = useStyles()
    const data = props.data

    return (
        <Grid item md={6} sm={12} xs={12} key={data.rank}>
            <Card className={classes.card}>
                <div>
                    <CardMedia
                        className={classes.cover}
                        image={data.image_url}
                        title={data.title}
                    />
                </div>
                <div className={classes.details}>
                    <CardContent className={classes.content}>
                        <Chip
                            label={<b>Rank : {data.rank}</b>}
                            color="primary"
                            className="rank"
                        />
                        <Chip
                            label={`Score : ` + data.score}
                            className="score"
                        />
                        <Typography component="h5" variant="h5" className="title">
                            <b>{data.title}</b>
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {data.type}
                            {data.episodes !== null ? ", " + data.episodes + " Episodes" : ""}
                        </Typography>
                    </CardContent>
                </div>
            </Card>
        </Grid>
    )
}

function SimpleCard2(props) {
    const classes = useStyles()
    const data = props.data
    let score
    if (data.score !== 0) {
        score = (
            <Chip
                label={`Score : ` + data.score}
                className="score"
            />
        )
    }

    return (
        <Card className="card">
            <div className="top-side">
                <Chip
                    label={<b>{data.rank}</b>}
                    color="primary"
                    className="rank"
                />
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
                    <Typography gutterBottom variant="h5" component="h2" className="description">
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
    )
}

export default SimpleCard2