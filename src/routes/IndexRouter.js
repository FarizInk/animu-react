import React from "react";
import { Route, Switch } from "react-router-dom";
// We will create these two pages in a moment
import IndexPage from "../pages/IndexPage";
import UserPage from "../pages/UserPage";

export default function IndexRouter() {
  return (
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/:id" component={UserPage} />
      </Switch>
  );
}
