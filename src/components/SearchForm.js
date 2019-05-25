import React, { Component } from "react";
import { connect } from "react-redux";
import { moviesFetchData } from "../actions/movies";
import { shortlistAdd } from "../actions/shortlist";
import List from "./List";

const mapStateToProps = state => {
  return {
    movies: state.movies,
    hasErrored: state.moviesHasError,
    isLoading: state.moviesIsLoading,
    shortlist: state.shortlist
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
        "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&",
      query: "query=",
      key: "&language=en-US&api_key=[your_key]",
      mockUrl: "http://localhost:9888/movies",
      poster_path: "https://image.tmdb.org/t/p/w185_and_h278_bestv2/",
      qinput: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ qinput: event.target.value });
  }
  render() {
    const { movies, fetchData, shortlistAdd, shortlist } = this.props;
    const { url, query, key, qinput } = this.state;
    let idFav = shortlist.map(shortlistItem => {
      return {
        id: shortlistItem.id,
        later: shortlistItem.later
      };
    });
    let url_comp = url + query + qinput + key;
    const handleSearch = event => {
      event.preventDefault();
      fetchData(url_comp);
    };
    return (
      <div>
        <form onSubmit={handleSearch}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="type in movie title"
              value={qinput}
              onChange={this.handleChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div>
          <List
            movies={movies}
            shortlist={idFav}
            shortlistOperation={shortlistAdd}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
