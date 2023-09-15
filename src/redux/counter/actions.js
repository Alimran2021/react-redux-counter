import { DECREMENT, INCREMENT } from "./actionTypes";

export const increment = (value) => {
  const increAction = {
    type: INCREMENT,
    payload: value,
  };
  return increAction;
};
export const decrement = (value) => {
  const decreAction = {
    type: DECREMENT,
    payload: value,
  };
  return decreAction;
};
