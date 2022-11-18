import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser } from "./userSlice";

const newUserBack = {
  backgroundColor: "yellow",
  padding: "10px",
  margin: "5px",
  borderRadius: "10px",
  maxWidth: "400px",
  color: "#000",
  // overflow: "hidden",
};
export const UserView = () => {
  // useEffect(() => {
  //     users = useSelector((storeState) => storeState.users.users);
  //   }, []);
  //     useEffect(()=>{
  //   users=localStorage.getItem()
  //     },[])
  // useEffect(()=>{
  // users=localStorage.getItem()

  // },[])
  const inputRef = useRef(null);
  const users = useSelector((storeState) => storeState.users.users);
  let count = 0;
  count = useSelector((storeState) => storeState.users.count);
  useEffect(() => {
    inputRef.current.focus();
  }, [count]);
  const dispatch = useDispatch();
  const [newUser, setnewUser] = useState(null);
  // console.log(newUser);
  const addUserFunction = () => {
    if (!newUser) return;
    dispatch(addUser(newUser));
    localStorage.setItem(`${count}`, newUser);
    // inputRef.current.value
    setnewUser("");

    // localStorage.setItem(`${newUser}`, newUser);
  };
  const deleteUserFunction = (userInd) => {
    dispatch(deleteUser());
    // users.map((ele) => {
    //   // if (user == ele) ;
    // });
    // console.log(userInd);
    localStorage.key(userInd);
    console.log(count);
  };

  return (
    <div>
      <h1>UserView</h1>
      <input
        ref={inputRef}
        onChange={(e) => setnewUser(e.target.value)}
        value={newUser || ""}
      />
      <button onClick={addUserFunction}>ADD user</button>
      {/* <button onClick={deleteUserFunction}>Delete user</button> */}
      {users.map((user) => (
        <div key={count++} style={newUserBack}>
          <h3>{user}</h3>
          <button onClick={() => deleteUserFunction(user)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
