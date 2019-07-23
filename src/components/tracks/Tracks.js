import React, { Component } from "react";

import { Consumer } from "../../Context";
import Spinner from "../layouts/Spinner";
import Track from "./Track";

export default class Tracks extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { track_list } = value;
          if (track_list.length === 0) {
            return <Spinner />;
          } else {
            return (
              <React.Fragment>
                <h3 className="text-center mb-4">{value.heading}</h3>
                <div className="row" style={{ justifyContent: "center" }}>
                  {track_list.map(item => (
                    <Track key={item.track.track_id} track={item.track} />
                  ))}
                </div>
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}
