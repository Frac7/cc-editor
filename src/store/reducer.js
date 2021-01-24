import {
  SAVE_WIDGET,
  ADD_WIDGET,
  REMOVE_WIDGET,
  SELECT_WIDGET
} from './actions';

const reducer = (state, action) => {
  switch (action.type) {
    case SAVE_WIDGET:
      return {
        ...state,
        widgets: {
          ...state.widgets,
          [state.current]: action.payload
        }
      };
    case ADD_WIDGET:
      return {
        ...state,
        counter: state.counter + 1,
        widgets: {
          ...state.widgets,
          [state.counter + 1]: action.payload
        }
      };
    case REMOVE_WIDGET:
      const widgets = { ...state.widgets };
      delete widgets[action.payload];

      return {
        ...state,
        widgets
      };
    case SELECT_WIDGET:
      return {
        ...state,
        current: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
