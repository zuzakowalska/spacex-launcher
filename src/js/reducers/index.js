import { CHANGE_VIEW } from '../constants/action-types';

const initialState = {
  viewName: 'list',
  launches: [],
  launch: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_VIEW:
      state.viewName;
  }
};

export default rootReducer;
