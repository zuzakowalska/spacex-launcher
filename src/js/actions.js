import { ADD_TEST } from './constants/action-types';

export const addTest = test => ({
  type: ADD_TEST,
  payload: 'test',
});
