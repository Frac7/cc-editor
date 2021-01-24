import { UPDATE_NAME, SAVE } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      };
    case SAVE:
      return {
        ...state,
        attributes: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
