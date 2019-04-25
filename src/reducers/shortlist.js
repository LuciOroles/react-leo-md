import { ADD_REMOVE_SHORTLIST } from "../actions/types";

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
		case ADD_REMOVE_SHORTLIST:
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
			let filterOut = altered.filter(filterOutNoFav);
			return filterOut;

		default:
			return state;
	}
}
