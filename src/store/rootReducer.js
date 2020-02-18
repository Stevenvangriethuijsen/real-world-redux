// src/store/rootReducer.js
import { combineReducers } from "redux";
import developersReducer from "./developersReducer";
export default combineReducers({
  havingFun: havingFunReducer,
  developers: developersReducer
  // we can add more "slice" subreducers here later on...
});

function havingFunReducer(state = "yes", action) {
  switch (action.type) {
    case "SET_HAVING_FUN": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
