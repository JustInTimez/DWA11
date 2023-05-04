/**
 * A reducer function that calculates a new state based on the current state and the dispatched action
 *
 * @param {object} state - The current state
 * @param {object} action - The dispatched action
 * @param {string} action.type - The type of the dispatched action
 * @returns {object} The new state
 */
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { count: state.count + 1 };
    case "SUBTRACT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

export { reducer };
