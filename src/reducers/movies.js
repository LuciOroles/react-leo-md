import { MOVIES_ERROR, MOVIES_SUCESS, MOVIES_LOADING } from "../actions/types";

export function moviesHasError(state = false, action) {
  switch (action.type) {
    case MOVIES_ERROR:
      return action.hasError;
    default:
      return state;
  }
}
export function moviesIsLoading(state = false, action) {
  switch (action.type) {
    case MOVIES_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}
export function movies(state = [], action) {
  switch (action.type) {
    case MOVIES_SUCESS:
      return action.movies;
    default:
      return state;
  }
}
