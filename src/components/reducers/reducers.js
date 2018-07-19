export function change(name) {
  return {
    type: 'CHANGE',
    name,
  };
}

const initialState = {
  viewName: 'list',
  launches: [],
  launch: [],
};

const rootReducer = (state = initialState, action) => {
  return state;
};
export default rootReducer;
