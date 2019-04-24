import { ADD_TO_SHORTLIST, REMOVE_FROM_SHORTLIST } from "../actions/types";

const filterOutNoFav = function(mov) {
  if (!mov.later) {
    return false;
  } else {
    if (mov.later.length === 0) return false;
  }
  return true;
};

export function shortlistReducer(state = [], action) {
  switch (action.type) {
    case ADD_TO_SHORTLIST:
      debugger;
      let movie = action.payload;
      let found = false;
      let altered = state.map(mov => {
        if (mov.id === movie.id) {
          found = true;
          let il = mov.later.indexOf(movie.later[0]);
          if (il > -1) {
            mov.later.splice(il, 1);
          } else {
            mov.later.push(movie.later[0]);
          }
        }
        return mov;
      });

      if (!found) altered.push(movie);
      debugger;

      let filterOut = altered.filter(filterOutNoFav);

      return filterOut;
    case REMOVE_FROM_SHORTLIST:
      return state;
    default:
      return state;
  }
}
