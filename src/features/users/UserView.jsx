import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUser } from "./userSlice";

import { motion } from "framer-motion";
const newUserBack = {
  backgroundColor: "purple",
  padding: "10px",
  margin: "5px",
  borderRadius: "10px",
  maxWidth: "400px",
  color: "#000",
};

export const UserView = () => {
  const inputRef = useRef(null);
  const updateRef = useRef(null);
  const users = useSelector((storeState) => storeState.users.users);
  // console.log(users[users.length - 1] ? users.length : 0);
  // let count = 0;
  // count = useSelector((storeState) => storeState.users.count);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  const dispatch = useDispatch();
  const [newUser, setnewUser] = useState(null);
  const [newUsername, setnewUsername] = useState(null);
  const [updatedUsername, setupdatedUsername] = useState(null);
  const addUserFunction = () => {
    if (!newUser) return;
    dispatch(
      addUser({
        id: users[users.length - 1] ? users[users.length - 1].id + 1 : 0,
        name: newUser,
        userName: newUsername,
      })
    );
    // localStorage.setItem(`${count}`, newUser);
    setnewUser("");
    setnewUsername("");
  };
  const deleteUserFunction = (userId) => {
    dispatch(deleteUser(userId));

    // localStorage.key(userId);
    // console.log(count);
  };

  return (
    <div>
      <motion.h2
        whileTap={{ scale: 0.8 }}
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        className='userHead'
      >
                UserView
      </motion.h2>
      <br />
      <input
        ref={inputRef}
        onChange={(e) => setnewUser(e.target.value)}
        value={newUser || ""}
        placeholder="Name..."
      />
      <input
        onChange={(e) => setnewUsername(e.target.value)}
        value={newUsername || ""}
        placeholder="UserName..."
      />
      <button onClick={addUserFunction}>ADD user</button>
      {users.map((user) => (
        <div key={user.id} style={newUserBack}>
          <h2>{user.name}</h2>
          <h3>{user.userName}</h3>
          <input
            ref={updateRef}
            onChange={(e) => setupdatedUsername(e.target.value)}
            value={updatedUsername || ""}
            placeholder="new Username..."
          />
          <button
            onClick={() => {
              updateRef.current.value = updatedUsername;
              dispatch(
                updateUser({ id: user.id, userName: updateRef.current.value })
              );
            }}
          >
            Update
          </button>

          <button onClick={() => deleteUserFunction(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
