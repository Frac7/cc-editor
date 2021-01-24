import { UPDATE_NAME, SAVE, ADD_WIDGET, REMOVE_WIDGET } from './actions';

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
          counter: state.left.counter + 1,
          widgets: {
            ...state.left.widgets,
            [state.left.counter + 1]: action.payload
          }
        }
      };
    case REMOVE_WIDGET:
      const widgets = { ...state.left.widgets };
      delete widgets[action.payload];

      return {
        ...state,
        left: {
          ...state.left,
          widgets
        }
      };
    default:
      return state;
  }
};

export default reducer;
