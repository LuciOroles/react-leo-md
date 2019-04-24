import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    let tmdbRequest = new Request(
      "https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query=game%20of%20thrones&language=en-US&api_key=d1e5532be9d5c4de6ad35098d60b22a2",
      { method: "GET" }
    );
    // fetch(tmdbRequest)
    //   .then(resp => {
    //     return resp.json();
    //   })
    //   .catch(console.error)
    //   .then(data => {
    //     debugger;
    //     this.setState({
    //       movies: data.results
    //     });
    //   })
    //   .catch(console.error);
  }

  render() {
    var { movies } = this.state;
    return (
      <div className="App">
        <header className="App-header">React-Redux-Movie LeoVegas</header>
        {movies.length === 0 ? (
          <p>No movies yet</p>
        ) : (
          movies
            .map(movie => {
              debugger;
              return <div key={movie.id}>{movie.title}</div>;
            })
            .concat("")
        )}
      </div>
    );
  }
}

export default App;
