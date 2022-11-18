import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../features/cake/cakeSlice";
export const AnotherCake = () => {
  const [newCake, setnewCake] = useState(0);
  const numOfCakes = useSelector((storeState) => storeState.cake.numOfcake);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>AnotherCake</h1>
      <input
        placeholder="new cake"
        onChange={(e) => setnewCake(e.target.value)}
      />
      <div>{numOfCakes}</div>
      <button onClick={() => dispatch(increase(+newCake))}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </div>
  );
};
