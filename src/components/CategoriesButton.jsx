import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import { Link } from 'react-router-dom'


const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    }
}));

export default function CategoriesButton(props) {
    const classes = useStyles()
    const name = props.name
    const pageType = props.type

    return (
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <Button
                variant={
                    pageType === name ? "outlined" : "contained"
                }
                size="medium"
                color="primary"
                className={classes.margin}
            >
                {name}
            </Button>
        </Link>
    )
}