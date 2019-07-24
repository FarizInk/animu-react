import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    }
}))

const CategoriesButton = (props) => {
    const classes = useStyles()
    const name = props.name
    const pageType = props.type

    const getData = (type, page) => {
        props.handleLoading(true)
        window.scrollTo(0, 0)
        axios(`${process.env.REACT_APP_API_URL}top/anime/${page}/${type}`)
        .then(response => {
            props.handleTop({
                type: name,
                page: 1,
                data: response.data.top
            })
            props.handleLoading(false)
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    return (
        <Link to={props.link} style={{ textDecoration: 'none' }}>
            <Button
                variant={
                    pageType === name ? "outlined" : "contained"
                }
                size="medium"
                color="primary"
                className={classes.margin}
                onClick={() => getData(name, props.dataSubPage.page)}
            >
                {name}
            </Button>
        </Link>
    )
}

const mapStateToProps = (state, props) => {
    return {
        dataSubPage: state[props.link.split('/')[1]],
        pagePosition: state.pagePosition
    }
}

const mapDispatchtoProps = (dispatch, props) => {
    return {
        handleTop: (value) => dispatch({
            type: 'HANDLE_' + props.link.split('/')[1].toUpperCase(),
            data: value
        }),
        handleLoading: (value) => dispatch({
            type: 'HANDLE_LOADING',
            data: value
        })
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(CategoriesButton)
