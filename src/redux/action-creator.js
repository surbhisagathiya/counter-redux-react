import * as actionTypes from "./action-types";

export const increaseValue = () => {
  return {
    type: actionTypes.INCREAMENT,
  };
};

export const decreaseValue = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};
