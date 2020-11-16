import React, { Component } from "react";
import Movie from "./Movie";
import axios from "axios";

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      areOnlyRecentMoviesDisplayed: false,
    };
    this.recentMoviesHandler = this.recentMoviesHandler.bind(this);
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies() {
    axios
      .get(
        "https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json"
      )
      .then((response) => {
        this.setState({
          movies: response.data.movies,
        });
      });
  }

  recentMoviesHandler() {
    const displayed = this.state.areOnlyRecentMoviesDisplayed;
    this.setState({
      areOnlyRecentMoviesDisplayed: !displayed,
    });
  }

  render() {
    return (
      <div className="MovieList">
        <button onClick={this.recentMoviesHandler}>
          {this.state.areOnlyRecentMoviesDisplayed
            ? "All movies"
            : "Recent movies"}
        </button>
        {this.state.movies
          .filter(
            (movie) =>
              !this.state.areOnlyRecentMoviesDisplayed ||
              parseInt(movie.year) > 2000
          )
          .map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))}
      </div>
    );
  }
}

export default MovieList;
