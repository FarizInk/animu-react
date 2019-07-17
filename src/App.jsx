import React, { Fragment, Component } from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import IndexRouter from "./routes/IndexRouter"
import { makeStyles } from "@material-ui/core/styles"
import Container from "@material-ui/core/Container"

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

function CustomContainer() {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="lg">
      <IndexRouter />
    </Container>
  )
}

class App extends Component {

  render() {
    return (
      <Fragment>
        <Nav />
        <main>
          <CustomContainer />
        </main>
        <Footer />
      </Fragment>
    )
  }
}

export default App