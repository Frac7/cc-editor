import { UPDATE_NAME } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
