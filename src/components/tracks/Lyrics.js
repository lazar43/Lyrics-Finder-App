import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner";
import Moment from "react-moment";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    const proxy = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(
        `${proxy}https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        // console.log(res);
        this.setState({
          lyrics: res.data.message.body.lyrics
        });
        return axios
          .get(
            `${proxy}https://api.musixmatch.com/ws/1.1/track.get?track_id=${
              this.props.match.params.id
            }&apikey=${process.env.REACT_APP_MM_KEY}`
          )
          .then(res => {
            // console.log(res.data);
            this.setState({
              track: res.data.message.body.track
            });
          });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { track, lyrics } = this.state;
    if (
      Object.keys(track).length === 0 ||
      Object.keys(lyrics).length === 0 ||
      track === "undefined" ||
      lyrics === "undefined"
    ) {
      return <Spinner />;
    } else {
      try {
        return (
          <React.Fragment>
            <Link to="/" className="btn btn-dark btn-sm mb-4">
              Go Back
            </Link>
            <div className="card">
              <h5 className="card-header text-capitalize">
                {track.track_name} by
                <span className="text-secondary"> {track.artist_name}</span>
              </h5>
              <div className="card-body">
                <p className="card-text">{lyrics.lyrics_body}</p>
              </div>
            </div>
            <ul className="list-group mt-3">
              <li className="list-group-item">
                <strong>Album ID</strong>: {track.album_id}
              </li>
              <li className="list-group-item">
                <strong>Song Genre</strong>:{" "}
                {
                  track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name
                }
              </li>
              <li className="list-group-item">
                <strong>Explicit Content</strong>:{" "}
                {track.explicit === 0 ? "No" : "Yes"}
              </li>
              <li className="list-group-item">
                <strong>Release Date</strong>:{" "}
                <Moment format="DD-MM-YYYY">{track.updated_time}</Moment>
              </li>
            </ul>
          </React.Fragment>
        );
      } catch (err) {
        console.log(err);
        return (
          <div className="text-center" style={{ justifyContent: "center" }}>
            <h1>Something went wrong</h1>
          </div>
        );
      }
    }
  }
}

export default Lyrics;
