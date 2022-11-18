import { createSlice } from "@reduxjs/toolkit";

const usersInit =
  localStorage.getItem("users") != null
    ? JSON.parse(localStorage.getItem("users"))
    : [];

const countInit = localStorage.getItem("users")
  ? JSON.parse(localStorage.getItem("users")).length
  : 0;

const initialState = {
  users: usersInit,
  count: countInit,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      // state.count++;
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
      localStorage.setItem(
        "users",
        JSON.stringify(state.users.map((item) => item))
      );
    },
    deleteUser: (state, action) => {
      console.log("delete")
      users.map((vaue,ind,arr)=>{
        
      })
    //  state.users.forEach(element => {
    //   if(element==action.payload) console.log(element)
    //  });
    },
  },
});

export default userSlice.reducer;
export const { addUser, deleteUser } = userSlice.actions;
