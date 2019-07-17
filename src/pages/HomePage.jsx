
import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <h2>Home Page </h2>
        <p>
          <Link to="/farizink">FarizInk</Link> on GitHub.
      </p>
      </Fragment>
    )
  }
}

export default HomePage