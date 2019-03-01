import { CHANGE_SEARCH_FIELD } from "./constant";

const initialState = {
  searchField: ""
};

const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, { searchField: action.payload });
    default:
      return state;
  }
};
export default searchRobots;
