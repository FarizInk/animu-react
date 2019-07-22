import React, { Fragment, Component } from "react"
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import IndexRouter from "./routes/IndexRouter"
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#b388ff",
      main: "#6200ea",
      dark: "#311b92",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000"
    }
  }
});

function Theme() {
  return (
    <MuiThemeProvider theme={theme}>
      <Nav />
      <main style={{ marginTop: 30 }}>
        <Container maxWidth="lg">
          <IndexRouter />
        </Container>
      </main>
      <Footer />
    </MuiThemeProvider>
  )
}

class App extends Component {

  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Theme />
      </Fragment>
    )
  }
}

export default App