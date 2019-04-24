import React, { Component } from "react";
import { connect } from "react-redux";
import { moviesFetchData } from "../actions/movies";
import { shortlistAdd } from "../actions/shortlist";

const mapStateToProps = state => {
  return {
    movies: state.movies,
    hasErrored: state.moviesHasError,
    isLoading: state.moviesIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(moviesFetchData(url)),
    shortlistAdd: movie => dispatch(shortlistAdd(movie))
  };
};
class SearchForm extends Component {
  constructor() {
    super();
    this.state = {
      url:
        "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=game%20of%20thrones&language=en-US&api_key=d1e5532be9d5c4de6ad35098d60b22a2",
      mockUrl: "http://localhost:9888/movies",
      poster_path: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/"
    };
  }
  render() {
    const { movies, fetchData, shortlistAdd } = this.props;
    const { url, mockUrl } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={e => {
            console.log(e);
            fetchData(mockUrl);
          }}
        >
          Fetch GoT
        </button>
        <div>
          <div>movie list</div>
          {movies.map(movie => {
            return (
              <div key={movie.id}>
                {movie.title}
                <div className="imageCtrl">
                  <img
                    src={this.state.poster_path + movie.poster_path}
                    alt={movie.title}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={e => {
                      let mv = Object.assign({}, movie);
                      mv.later = ["fav"];
                      shortlistAdd(mv);
                    }}
                  >
                    fav
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    onClick={e => {
                      let mv = Object.assign({}, movie);
                      mv.later = ["later"];
                      shortlistAdd(mv);
                    }}
                  >
                    later
                  </button>
                </div>
                <hr />
              </div>
            );
          })}

          {/* {this.props.movies.length > 0 ? (
            this.props.movies.map(movie => <div>{movie.title}</div>).connect("")
          ) : (
            <p>No movie yet</p>
          )} */}
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
