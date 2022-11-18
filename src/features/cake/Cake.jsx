import React, { useState } from "react";
import { increase, decrease } from "./cakeSlice";
import { useDispatch, useSelector } from "react-redux";
export const Cake = () => {
  const numOfcakes = useSelector((state) => state.cake.numOfcake);
  const [cakes, setCakes] = useState(0);
  const dispatch = useDispatch();
  return (
    <div>
      <input
        placeholder="Enter cakes"
        onChange={(e) => setCakes(e.target.value)}
      />
      <h1>CakeSlice</h1>
      <div>{numOfcakes}</div>
      <div>
        <button onClick={() => dispatch(increase(+cakes))}>Increase</button>
      </div>
      <div>
        <button onClick={() => dispatch(decrease())}>Decrease</button>
      </div>
    </div>
  );
};
