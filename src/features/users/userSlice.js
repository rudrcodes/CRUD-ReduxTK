import { createSlice } from "@reduxjs/toolkit";

const usersArr = [];

const usersInit =
  localStorage.getItem("users") != null
    ? JSON.parse(localStorage.getItem("users"))
    : [];

const countInit = localStorage.getItem("count")
  ? localStorage.getItem("count")
  : 0;

for (let i = 0; i < countInit; i++) {
  usersArr.push(localStorage.getItem(i));
}
console.log(usersArr);

const initialState = {
  users: usersArr,
  // users: (countInit==0)?[]:,
  count: countInit,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      // state.count++;
      localStorage.setItem("count", state.count);
      // localStorage.getItem("count")

      let item = action.payload;
      // ek array as a key ko local storage mein dalna h
      // const present = state.users.forEach((element) => {
      //   // if (element === item) {
      //   //   alert("error");
      //   //   return true;
      //   // }
      //   console.log(element);
      // });
      // if (present) return;
    },
    deleteUser: (state, action) => {
      console.log("delete");
      // localStorage
      // users.map((vaue, ind, arr) => {});
      //  state.users.forEach(element => {
      //   if(element==action.payload) console.log(element)
      //  });
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
