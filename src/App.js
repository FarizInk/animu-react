import React from "react";
import Nav from "./components/Nav";
import IndexRouter from "./routes/IndexRouter";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

export default function App() {

  return (
    <React.Fragment>
      <CssBaseline />
      <Nav/>
      <main style={{ marginTop:100 }}>
        <Container maxWidth="lg">
          <IndexRouter />
        </Container>
      </main>
    </React.Fragment>
  );
}
