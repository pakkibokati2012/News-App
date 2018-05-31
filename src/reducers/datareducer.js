import { USER_OPENED_APP } from '../actions/types';

const INITIAL_STATE = { isLoading: true, data: {} };


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case USER_OPENED_APP:
case 'ram':

      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};
