import { ADD_TO_SHORTLIST, REMOVE_FROM_SHORTLIST } from "./types";
export function shortlistAdd(payload) {
  return {
    type: ADD_TO_SHORTLIST,
    payload
  };
}

export function shortlistRemove(payload) {
  return {
    type: REMOVE_FROM_SHORTLIST,
    payload
  };
}
