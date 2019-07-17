import React from "react"
import { Route, Switch } from "react-router-dom"
import HomePage from "../pages/HomePage"
import TopPage from "../pages/TopPage"
import SchedulePage from "../pages/SchedulePage"
import GenrePage from "../pages/GenrePage"
import SeasonPage from "../pages/SeasonPage"
import UserPage from "../pages/UserPage"

export default function IndexRouter() {
  return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/top" component={TopPage} />
        <Route path="/schedule" component={SchedulePage} />
        <Route path="/genre" component={GenrePage} />
        <Route path="/season" component={SeasonPage} />
        <Route path="/user/:id" component={UserPage} />
      </Switch>
  );
}
