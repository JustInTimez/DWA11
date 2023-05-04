/**
 * Initial state for the Tally App
 * @typedef {Object} InitialState
 * @property {number} count - The current count of the Tally App
 */

/** @type {InitialState} */
const initialState = {
  count: 0,
};

/**
 * Creates a Redux-inspired store to manage the state of the Tally App
 * @param {InitialState} initialState - The initial state of the Tally App
 * @param {Function} reducer - The reducer function that will handle state updates
 * @returns {Object} An object containing the getState, dispatch, and subscribe methods
 */
function createStore(initialState, reducer) {
  let state = initialState;
  const listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
  }

  function subscribe(listener) {
    listeners.push(listener);
    return () => {
      const index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    };
  }

  return {
    getState,
    dispatch,
    subscribe,
  };
}

export { initialState, createStore };
