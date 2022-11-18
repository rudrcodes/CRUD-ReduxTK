import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cakeReducer from "../features/cake/cakeSlice";
import userReducer from "../features/users/userSlice";
import { addUser } from "../features/users/userSlice";

// const authMiddleware = (store) => (next) => (action) => {
//   if (authActions.addUser.match(action)) {
//     // Note: localStorage expects a string
//     localStorage.setItem("isAuthenticated", "true");
//   } else if (authActions.addUser.match(action)) {
//     localStorage.setItem("isAuthenticated", "false");
//   }
//   return next(action);
// };
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    users: userReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(authMiddleware),
});

export default store;
