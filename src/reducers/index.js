import { combineReducers } from "redux";
import { moviesHasError, moviesIsLoading, movies } from "./movies";
import { shortlistReducer as shortlist } from "./shortlist";
export default combineReducers({
  movies,
  moviesHasError,
  moviesIsLoading,
  shortlist
});
