import ACTIONS from '../actions';

const InitialState = {
  measurements: {},
  events: [],
};

const BrowserReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ACTIONS.BROWSER.REGISTER_EVENT_SUCCESS:
      return {
        measurements: { ...state.measurements },
        events: [
          ...state.events,
          {
            event: action.event,
            registered: true,
          },
        ],
      };
    case ACTIONS.BROWSER.UNREGISTER_EVENT_SUCCESS:
      return {
        measurements: { ...state.measurements },
        events: [
          ...state.events,
          {
            event: action.event,
            registered: false,
          },
        ],
      };
    case ACTIONS.BROWSER.MEASURE_RENDERED_ELEMENT_SUCCESS:
      return {
        measurements: {
          ...state.measurements,
          [`${action.measurement.className}`]: action.measurement,
        },
        events: [...state.events],
      };
    default:
      return state;
  }
};

export default BrowserReducer;
