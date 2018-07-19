import { ADD_TEST } from '../action-types';

const initialState = {
  test: [],
  viewName: 'list',
  launches: [],
  launch: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TEST:
      return { state, test: [state.test, action.payload] };
    default:
      return state;
  }
};

export default rootReducer;
