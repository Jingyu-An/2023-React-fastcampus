import React, {useCallback, useMemo, useReducer, useRef, useState} from "react";
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import useInputs from "./useInputs";

const countActiveUsers = (users) => {
  console.log('counting...');
  return users.filter(user => user.active).length;
};

const initializeState = {
  users: [
    {
      id      : 1,
      username: 'John',
      email   : 'john@example.com',
      active  : true
    },
    {
      id      : 2,
      username: 'Jane',
      email   : 'jane@example.com',
      active  : false
    },
    {
      id      : 3,
      username: 'Tim',
      email   : 'tim@example.com',
      active  : false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        inputs: initializeState.inputs,
        users : state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
            ? {...user, active: !user.active}
            : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unknown action type: ' + action.type);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initializeState)
  
  const [form, onChange, reset] = useInputs({
    username: '',
    email   : ''
  });
  
  const {username, email} = form;
  
  const nextId = useRef(4);
  
  const {users} = state;
  
  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextId.current++,
        username,
        email
      }
    })
    reset();
  }, [username, email, reset]);
  
  const onToggle = useCallback((id) => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);
  
  const onRemove = useCallback((id) => {
    dispatch({
      type: 'REMOVE_USER',
      id
    })
  })
  
  const count = useMemo(() => countActiveUsers(users), [users])
  
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
      <div>Active users: {count}</div>
    </>
  );
}

export default App;
