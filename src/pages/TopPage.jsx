import React, { Component, Fragment } from "react";
import CategoriesButton from "../components/CategoriesButton";
import axios from "axios";
import {
  HorizontalSimpleCard,
  VerticalSimpleCard
} from "../components/SimpleCard";
import { Grid } from "@material-ui/core";
import SimplePagination from "../components/SimplePagination";
import { connect } from "react-redux";
import "../css/CategoriesMenu.css";
import "../css/CardsPage.css";

class TopPage extends Component {
  constructor(props) {
    super(props);
    this.type = props.match.params.type;
    this.page = props.match.params.page;
  }

  getData(type, page) {
    this.props.handleLoading(true);
    window.scrollTo(0, 0);
    axios(`${process.env.REACT_APP_API_URL}top/anime/${page}/${type}`)
      .then(response => {
        this.props.handleTop({
          type: this.props.dataTop.type,
          page: this.props.dataTop.page,
          data: response.data.top
        });
        // setTimeout(
        //   function() {
        //     this.props.handleLoading(false);
        //   }.bind(this),
        //   3000
        // );
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  setPagePosition() {
    this.props.handlePagePosition("top");
  }

  componentDidMount() {
    document.title =
      "Top " +
      this.type.charAt(0).toUpperCase() +
      this.type.slice(1) +
      " - " +
      process.env.REACT_APP_NAME;
    this.setPagePosition();
    this.getData(this.type, this.page);
  }

  componentWillUpdate(props) {
    this.type = props.match.params.type;
    this.page = props.match.params.page;
  }

  componentDidUpdate() {
    document.title =
      "Top " +
      this.type.charAt(0).toUpperCase() +
      this.type.slice(1) +
      " - " +
      process.env.REACT_APP_NAME;
  }

  render() {
    let data;
    if (this.props.loading === true) {
      data = <div>Loading...</div>;
    } else {
      data = (
        <div>
          <Grid className="desktop-container">
            {this.props.dataTop.data.map((anime, index) => (
              <VerticalSimpleCard data={anime} key={index} />
            ))}
          </Grid>
          <Grid className="mobile-container">
            {this.props.dataTop.data.map((anime, index) => (
              <HorizontalSimpleCard data={anime} key={index} />
            ))}
          </Grid>
        </div>
      );
    }
    let categoriesData = [
      "upcoming",
      "airing",
      "tv",
      "movie",
      "ova",
      "special"
    ];
    return (
      <Fragment>
        <div className="card-container">
          <div className="categories">
            {categoriesData.map((category, index) => (
              <CategoriesButton
                name={category}
                link={`/top/${category}/${this.props.dataTop.page}`}
                type={this.type}
                key={index}
              />
            ))}
          </div>
          {data}
          <SimplePagination pageNumber={this.page} pageType={this.type} />
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataTop: state.top,
    loading: state.loading,
    pagePosition: state.pagePosition
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    handleTop: value =>
      dispatch({
        type: "HANDLE_TOP",
        data: value
      }),
    handleLoading: value =>
      dispatch({
        type: "HANDLE_LOADING",
        data: value
      }),
    handlePagePosition: value =>
      dispatch({
        type: "HANDLE_PAGE_POSITION",
        data: value
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(TopPage);
