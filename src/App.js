import React, { Component } from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import Shortlist from "./components/Shortlist";
import Card from "./components/Card";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    };
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
        <Card />
        <SearchForm />
        <hr />
        <Shortlist />
      </div>
    );
  }
}

export default App;
