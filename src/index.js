import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "typeface-roboto";
import App from "./App";
import "./css/index.css";
import dotenv from "dotenv";
import Favicon from "react-favicon";

dotenv.config();

render(
  <BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
    <Favicon url="/assets/img/animu.ico" />
    <App />
  </BrowserRouter>,
  document.querySelector("#root")
);
