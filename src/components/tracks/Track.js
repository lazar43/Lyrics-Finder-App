import React from "react";
import { Link } from "react-router-dom";

export default function Track(props) {
  const { track } = props;
  return (
    <div className="col-md-5 col-sm-11 p-0">
      <div className="card mb-4 m-4 shadow-sm">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play" />
              &nbsp;Track:
            </strong>
            {track.track_name}
            <br />
            <strong>
              <i className="fas fa-compact-disc" />
              &nbsp;Album:
            </strong>
            {track.album_name}
            <br />
            <Link
              to={`lyrics/track/${track.track_id}`}
              className="btn btn-outline-info btn-block"
            >
              <i className="fas fa-chevron-right" />
              &nbsp;View Lyrics
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
