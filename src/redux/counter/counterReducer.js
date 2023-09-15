import { DECREMENT, INCREMENT } from "./actionTypes";

const initialState = {
  value: 0,
};

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      console.log("increment clicked");
      return {
        ...state,
        value: state.value + 1,
      };
    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };
    // default:
    //    return {state},
  }
}
