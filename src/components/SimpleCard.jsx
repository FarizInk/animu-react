import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Grid, Card, CardMedia, Chip, CardContent, Typography } from '@material-ui/core';

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

export default function Footer(props) {
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
                            className={classes.chip}
                            style={{ marginLeft: 0 }}
                        />
                        <Chip
                            label={`Score : ` + data.score}
                            className={classes.chip}
                        />
                        <Typography component="h5" variant="h5">
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