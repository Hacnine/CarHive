import React, { useReducer } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Homep from "./Homep";
import Aboutp from "./Aboutp";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Mainp = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div className=" flex items-center justify-center flex-col gap-5">
      <p>{state.count}</p>

      <button onClick={increment} className=" bg-orange-900">
        Add
      </button>
      <button onClick={decrement} className=" bg-orange-900">
        Minus
      </button>
    </div>
  );
};

export default Mainp;
