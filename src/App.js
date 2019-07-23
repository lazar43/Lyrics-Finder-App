import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import Lyrics from "./components/tracks/Lyrics";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="conatiner" style={{ width: "85%", margin: "0 auto" }}>
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/lyrics/track/:id" component={Lyrics} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}
