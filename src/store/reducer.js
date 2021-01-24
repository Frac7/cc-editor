import { UPDATE_NAME, SAVE, ADD_WIDGET } from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        right: {
          ...state.right,
          name: action.payload
        }
      };
    case SAVE:
      return {
        ...state,
        right: {
          ...state.right,
          attributes: action.payload
        }
      };
    case ADD_WIDGET:
      return {
        ...state,
        left: {
          ...state.left,
          widgets: [...state.left.widgets, action.payload]
        }
      };
    default:
      return state;
  }
};

export default reducer;
