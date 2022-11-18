import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numOfcake: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    increase: (state, action) => {
      state.numOfcake = state.numOfcake + action.payload;
    },
    decrease: (state, action) => {
      state.numOfcake += state.numOfcake - action.payload;
    },
  },
});
//exporting the reducer
export default cakeSlice.reducer;
// exporting actions
export const { increase, decrease } = cakeSlice.actions;
