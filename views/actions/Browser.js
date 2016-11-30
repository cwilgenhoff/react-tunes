import ACTIONS from '../actions';

export const registerEventSuccess = event => ({
  type: ACTIONS.BROWSER.REGISTER_EVENT_SUCCESS,
  event: event,
});

export const unregisterEventSuccess = event => ({
  type: ACTIONS.BROWSER.UNREGISTER_EVENT_SUCCESS,
  event: event,
});

export const measureRenderedElementSuccess = (measurement) => {
  return {
    type: ACTIONS.BROWSER.MEASURE_RENDERED_ELEMENT_SUCCESS,
    measurement: measurement,
  };
};

export const measureRenderedElementFailure = (className) => {
  return {
    type: ACTIONS.BROWSER.MEASURE_RENDERED_ELEMENT_FAILURE,
    className: className,
  };
};

export const measureRenderedElementByClassName = className => (dispatch, getState) => {
  const { Browser } = getState();

  const elements = document.getElementsByClassName(className);
  if (!elements || elements.length === 0) {
    return dispatch(measureRenderedElementFailure(className));
  }

  const element = elements[0];
  const width = element.clientWidth;

  const hasBeenMeasuredAlready = Browser.measurements &&
    Browser.measurements[className];
  const isEqualMeasurement = hasBeenMeasuredAlready &&
    Browser.measurements[className].width === width;
  if (isEqualMeasurement) {
    return false;
  }

  return dispatch(measureRenderedElementSuccess({
    className,
    width,
  }));
};

export const addEventListener = (componentName, eventName, handler) => (dispatch, getState) => {
  const { events } = getState().Browser;
  if (events[`${componentName}-${eventName}`]) {
    return false;
  }

  window.addEventListener(eventName, handler);
  return dispatch(registerEventSuccess({ componentName, eventName }));
};

export const removeEventListener = (componentName, eventName, handler) => {
  const { events } = getState().Browser;
  if (!events[`${componentName}-${eventName}`]) {
    return false;
  }

  window.removeEventListener(eventName, handler);
  return dispatch(unregisterEventSuccess({ componentName, eventName }));
};
