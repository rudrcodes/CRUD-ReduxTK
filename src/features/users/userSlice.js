import { createSlice } from "@reduxjs/toolkit";

// const usersArr = [];

const usersInit =
  localStorage.getItem("users") != null
    ? JSON.parse(localStorage.getItem("users"))
    : [{ id: 0, name: "Test", userName: "Testcodes" }];

// const countInit = localSt orage.getItem("count")
//   ? localStorage.getItem("count")
//   : 0;

// for (let i = 0; i < countInit; i++) {
//   usersArr.push(localStorage.getItem(i));
// }
console.log(usersInit);

const initialState = {
  users: usersInit,
  // count: countInit,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("added");
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
      // let item = action.payload;
    },
    deleteUser: (state, action) => {
      console.log("delete");
      state.users = state.users.filter((user) => user.id !== action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
      // console.log(state.users.filter((user) => user.id !== action.payload.id));
    },
    updateUser: (state, action) => {
      console.log("updated");
      // console.log(action.payload.id);
      console.log(action.payload.userName);
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          // return {
          // ...user,
          user.userName = action.payload.userName;
          // };
        }
      });
      // localStorage.setItem("users", JSON.stringify(state.users));
      // console.log(state.users.filter((user) => user.id !== action.payload.id));
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser, updateUser } = userSlice.actions;
