import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { increaseValue, decreaseValue } from "../redux/action-creator";

const Counter = () => {
  const myState = useSelector((state) => state.ourState.count);
  console.log("+++ my state +++", myState);
  const disPatch = useDispatch();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
      }}
    >
      <button
        style={{
          backgroundColor: "crimson",
          color: "white",
          padding: "10px 30px",
        }}
        onClick={() => disPatch(increaseValue())}
      >
        +
      </button>
      <h4>{myState}</h4>
      <button
        style={{
          backgroundColor: "crimson",
          color: "white",
          padding: "10px 30px",
        }}
        onClick={() => disPatch(decreaseValue())}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
