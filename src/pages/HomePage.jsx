
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  componentDidMount() {
    document.title = "Home - " + process.env.REACT_APP_NAME;
  }

  render() {
    return (
      <Fragment>
        <h2>Home Page </h2>
        <p>
          Welcome to animu. deployed 25 jul 2019, 15:48PM, Dev Version.
        </p>
      </Fragment>
    )
  }
}

export default HomePage