import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { Button } from "@material-ui/core"
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'

var identifyPage = window.location.href.split('/')[3]

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1)
    }
}))

const CategoriesButton = (props) => {
    const classes = useStyles()
    const name = props.name
    const pageType = props.type

    const getData = async (type, page) => {
        props.handleLoading(true)
        window.scrollTo(0, 0)
        await axios(`${process.env.REACT_APP_API_URL}top/anime/${page}/${type}`)
        .then(response => {
            props.handleType({
                type: name,
                page: props.dataSubPage.page,
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

const mapStateToProps = (state) => {
    return {
        dataSubPage: state[identifyPage]
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        handleType: (value) => dispatch({
            type: 'HANDLE_' + identifyPage.toUpperCase(),
            data: value
        }),
        handleLoading: (value) => dispatch({
            type: 'HANDLE_LOADING',
            data: value
        })
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(CategoriesButton)
