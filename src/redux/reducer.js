import {
  FETCH_LAUNCHES_BEGIN,
  FETCH_LAUNCHES_SUCCESS,
  FETCH_LAUNCHES_FAILURE,
  CHANGE_LAUNCH,
} from './actions.js';

const initialState = {
  launches: [],
  launch: [],
  loading: false,
  error: null,
  url: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LAUNCH:
      return { ...state, launch: action.payload.data };
    case FETCH_LAUNCHES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_LAUNCHES_SUCCESS:
      return {
        ...state,
        loading: false,
        launches: action.payload.launchesEntries,
      };
    case FETCH_LAUNCHES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        launches: [],
      };
    default:
      return state;
  }
};

export default reducer;
