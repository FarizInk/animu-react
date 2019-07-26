import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TopPage from "../pages/TopPage";
import SchedulePage from "../pages/SchedulePage";
import GenrePage from "../pages/GenrePage";
import SeasonPage from "../pages/SeasonPage";

const IndexRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/top/:type/:page" component={TopPage} />
      <Route path="/schedule" component={SchedulePage} />
      <Route path="/genre" component={GenrePage} />
      <Route path="/season" component={SeasonPage} />
    </Switch>
  );
};

export default IndexRouter;
