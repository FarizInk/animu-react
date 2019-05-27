import React from "react";
import Nav from "./components/Nav";
import IndexRouter from "./routes/IndexRouter";
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

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Nav />
        <main style={{ marginTop: 100 }}>
          <Container maxWidth="lg">
            <IndexRouter />
          </Container>
        </main>
      </MuiThemeProvider>
    </React.Fragment>
  );
}
