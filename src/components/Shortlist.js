import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "./Card";
import { shortlistAdd } from "../actions/shortlist";
function mapStateToProps(state) {
  return {
    shortlist: state.shortlist
  };
}

const mapDispatchToProps = dispatch => {
  return {
    shortlistAdd: movie => dispatch(shortlistAdd(movie))
  };
};

class Shortlist extends Component {
  render() {
    const updateShortList = movie => {
      let newMovie = Object.assign({}, movie);
      return function(type) {
        newMovie["later"] = [type];
        debugger;
        shortlistAdd(newMovie);
      };
    };
    const { shortlist, shortlistAdd } = this.props;
    return (
      <div>
        <h1>Shortlist is here</h1>
        {shortlist.map(movie => {
          return (
            <Card
              key={movie.id}
              title={movie.title}
              poster_path={movie.poster_path}
              fav_handler={v => updateShortList(movie)(v)}
              favorite={movie.later.indexOf("fav") > -1}
              watchLater={movie.later.indexOf("later") > -1}
            />
          );
        })}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Shortlist);
