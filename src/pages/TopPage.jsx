import React, { Component, Fragment } from 'react'
import CategoriesButton from '../components/CategoriesButton'

class TopPage extends Component {
    constructor(props) {
        super(props);
        this.pageType = props.match.params.type;
        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        document.title = "Top " + this.pageType.charAt(0).toUpperCase() + this.pageType.slice(1) + " - " + process.env.REACT_APP_NAME;
    }

    componentDidUpdate() {
        document.title = "Top " + this.pageType.charAt(0).toUpperCase() + this.pageType.slice(1) + " - " + process.env.REACT_APP_NAME;
    }

    render() {
        return (
            <Fragment>
                <h2>Top Page</h2>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Click me
                </button>
                <div style={{ marginBottom: 12, marginLeft: -8 }}>
                    <CategoriesButton name="upcoming" link="/top/upcoming/1" type={this.pageType} />
                    <CategoriesButton name="airing" link="/top/airing/1" type={this.pageType} />
                    <CategoriesButton name="tv" link="/top/tv/1" type={this.pageType} />
                    <CategoriesButton name="movie" link="/top/movie/1" type={this.pageType} />
                    <CategoriesButton name="ova" link="/top/ova/1" type={this.pageType} />
                    <CategoriesButton name="special" link="/top/special/1" type={this.pageType} />
                </div>
            </Fragment >
        );
    }
}

export default TopPage