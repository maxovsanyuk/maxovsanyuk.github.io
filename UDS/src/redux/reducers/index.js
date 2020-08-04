import { combineReducers } from "redux";
import app_reducer from "./app_reducer";
import { RESET_STATE } from "../types/types";

const reducer = combineReducers({
  app: app_reducer,
});

export const rootReducer = (state, action) => {
  if (action.type === RESET_STATE) {
    state = {};
  }
  return reducer(state, action);
};
