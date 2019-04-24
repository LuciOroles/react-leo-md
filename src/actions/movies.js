import { MOVIES_ERROR, MOVIES_SUCESS, MOVIES_LOADING } from "./types";

export function moviesHasError(bool) {
  return {
    type: MOVIES_ERROR,
    hasError: bool
  };
}

export function moviesIsLoading(bool) {
  return {
    type: MOVIES_LOADING,
    isLoading: bool
  };
}

export function moviesLoadedSuccess(movies) {
  return {
    type: MOVIES_SUCESS,
    movies
  };
}

const errorMovies = moviesHasError(true);

export function moviesFetchData(tmdbRequest) {
  return dispatch => {
    dispatch(moviesIsLoading(true));
    fetch(tmdbRequest)
      .then(resp => {
        dispatch(moviesIsLoading(false));
        return resp.json();
      })
      .catch(() => {
        dispatch(errorMovies);
      })
      .then(data => {
        let movies = data.results || data; /*added for local test*/
        dispatch(moviesLoadedSuccess(movies));
      })
      .catch(() => {
        dispatch(errorMovies);
      });
  };
}
