import { CHANGE_VIEW } from '../constants/action-types';

export const changeView = viewName => ({
  type: CHANGE_VIEW,
  payload: viewName,
});
