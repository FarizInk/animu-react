import React from "react";
import { Route, Switch } from "react-router-dom";
// We will create these two pages in a moment
import IndexPage from "../pages/IndexPage";
import TopAnimePage from '../pages/TopAnimePage';
import ScheduleAnimePage from '../pages/ScheduleAnimePage';
import GenreAnimePage from '../pages/GenreAnimePage';
import SeasonAnimePage from '../pages/SeasonAnimePage';
import UserPage from '../pages/UserPage';

export default function IndexRouter() {
  return (
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route path="/top/:type/:page" component={TopAnimePage} />
        <Route path="/schedule" component={UserPage} />
        <Route path="/genre" component={GenreAnimePage} />
        <Route path="/season" component={SeasonAnimePage} />
      </Switch>
  );
}
