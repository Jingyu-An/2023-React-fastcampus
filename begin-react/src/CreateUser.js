import React, {useContext, useRef} from 'react';
import useInputs from "./useInputs";
import {UserDispatch} from "./App";

const CreateUser = () => {
  const [{username, email}, onChange, reset] = useInputs({
    username: '',
    email   : ''
  });
  
  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);
  
  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current++,
        username,
        email
      }
    });
    reset();
  };
  
  return (
    <div>
      <input
        name="username"
        placeholder="Username"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="Email"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>Register</button>
    </div>
  );
};

export default React.memo(CreateUser);