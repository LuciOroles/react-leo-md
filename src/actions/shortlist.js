import { ADD_REMOVE_SHORTLIST, REMOVE_FROM_SHORTLIST } from "./types";
export function shortlistAdd(payload) {
	return {
		type: ADD_REMOVE_SHORTLIST,
		payload
	};
}

export function shortlistRemove(payload) {
	return {
		type: REMOVE_FROM_SHORTLIST,
		payload
	};
}
