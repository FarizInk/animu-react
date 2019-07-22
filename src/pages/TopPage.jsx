import React, { Component, Fragment } from 'react'
import CategoriesButton from '../components/CategoriesButton'
import axios from 'axios'
import SimpleCard from '../components/SimpleCard'
import { Grid } from '@material-ui/core';

class TopPage extends Component {
    constructor(props) {
        super(props);
        this.type = props.match.params.type;
        this.page = props.match.params.page;
        this.state = {
            datas: {},
            loading: true
        };
    }

    getData(type, page) {
        window.scrollTo(0, 0);
        axios(`${process.env.REACT_APP_API_URL}top/anime/${page}/${type}`)
            .then(response => {
                this.setState({
                    datas: response.data,
                    loading: false
                })
                console.log(response.data)
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
    }

    componentDidUpdate() {
        document.title = "Top " + this.type.charAt(0).toUpperCase() + this.type.slice(1) + " - " + process.env.REACT_APP_NAME
    }

    render() {
        let data;
        if (this.state.loading === true) {
            data = <div>Loading...</div>
        } else {
            data = (
                <Grid container spacing={3}>
                    {this.state.datas.top.map((anime, index) => (
                        <SimpleCard data={anime} key={index} />
                    ))}
                </Grid>
            )
        }
        return (
            <Fragment>
                <div style={{ marginBottom: 12, marginLeft: -8 }}>
                    <CategoriesButton name="upcoming" link="/top/upcoming/1" type={this.type} />
                    <CategoriesButton name="airing" link="/top/airing/1" type={this.type} />
                    <CategoriesButton name="tv" link="/top/tv/1" type={this.type} />
                    <CategoriesButton name="movie" link="/top/movie/1" type={this.type} />
                    <CategoriesButton name="ova" link="/top/ova/1" type={this.type} />
                    <CategoriesButton name="special" link="/top/special/1" type={this.type} />
                </div>
                {data}
            </Fragment>
        );
    }
}

export default TopPage