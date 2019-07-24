import React, { Component, Fragment } from 'react'
import CategoriesButton from '../components/CategoriesButton'
import axios from 'axios'
import SimpleCard from '../components/SimpleCard'
import { Grid } from '@material-ui/core'
import SimplePagination from '../components/SimplePagination'
import { connect } from 'react-redux'
import '../css/CategoriesMenu.css'
import '../css/CardsPage.css'

class TopPage extends Component {
    constructor(props) {
        super(props)
        this.type = props.match.params.type
        this.page = props.match.params.page
    }

    getData(type, page) {
        this.props.handleLoading(true)
        window.scrollTo(0, 0);
        axios(`${process.env.REACT_APP_API_URL}top/anime/${page}/${type}`)
            .then(response => {
                this.props.handleTop({
                    type: this.props.dataTop.type,
                    page: this.props.dataTop.page,
                    data: response.data.top
                })
                this.props.handleLoading(false)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    componentDidMount() {
        document.title = "Top " + this.type.charAt(0).toUpperCase() + this.type.slice(1) + " - " + process.env.REACT_APP_NAME
        this.getData(this.type, this.page)
    }

    componentWillUpdate(props) {
        this.type = props.match.params.type;
        this.page = props.match.params.page;
    }

    componentDidUpdate() {
        document.title = "Top " + this.type.charAt(0).toUpperCase() + this.type.slice(1) + " - " + process.env.REACT_APP_NAME
    }

    render() {
        let data
        if (this.props.loading === true) {
            data = <div>Loading...</div>
        } else {
            data = (
                <Grid container spacing={3}>
                    {this.props.dataTop.data.map((anime, index) => (
                        <SimpleCard data={anime} key={index} />
                    ))}
                </Grid>
            )
        }
        let categoriesData = ['upcoming', 'airing', 'tv', 'movie', 'ova', 'special']
        return (
            <Fragment>
                <div className="card-container">
                    <div className="categories">
                        {categoriesData.map((category, index) => (
                            <CategoriesButton name={category} link={`/top/${category}/${this.props.dataTop.page}`} type={this.type} key={index} />
                        ))}
                    </div>
                    {data}
                    <SimplePagination pageNumber={this.page} pageType={this.type} />
                </div>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataTop: state.top,
        loading: state.loading
    }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        handleTop: (value) => dispatch({
            type: 'HANDLE_TOP',
            data: value
        }),
        handleLoading: (value) => dispatch({
            type: 'HANDLE_LOADING',
            data: value
        })
    }
}

export default connect(mapStateToProps, mapDispatchtoProps)(TopPage)