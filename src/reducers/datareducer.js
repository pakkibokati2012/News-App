const INITIAL_STATE = { isLoading: true, data: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'user_opened_app':
      return { ...state, data: action.payload, isLoading: false };
    default:
      return state;
  }
};
