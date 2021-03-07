import { SET_ACTIVE_PAGE } from "../types/types";

const INITIAL_STATE = {
  activePage: null,
};

export default function app_reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: payload,
      };

    default:
      return state;
  }
}
