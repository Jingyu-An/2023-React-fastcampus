import React, {createContext, useCallback, useMemo, useReducer, useRef, useState} from "react";
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";
import produce from "immer";
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
      return produce(state, draft => {
        draft.users.push(action.user);
      });
      // return {
      //   inputs: initializeState.inputs,
      //   users : state.users.concat(action.user)
      // }
    case 'TOGGLE_USER':
      return produce(state, draft => {
        const user = draft.users.find(user => user.id === action.id);
        user.active = !user.active;
      });
      // return {
      //   ...state,
      //   users: state.users.map(user =>
      //     user.id === action.id
      //       ? {...user, active: !user.active}
      //       : user
      //   )
      // };
    case 'REMOVE_USER':
      return produce(state, draft => {
        const index = draft.users.findIndex(user => user.id === action.id);
        draft.users.splice(index, 1);
      });
      // return {
      //   ...state,
      //   users: state.users.filter(user => user.id !== action.id)
      // }
    default:
      throw new Error('Unknown action type: ' + action.type);
  }
}

export const UserDispatch = createContext(null);
function App() {
  const [state, dispatch] = useReducer(reducer, initializeState)
  
  const {users} = state;
  
  const count = useMemo(() => countActiveUsers(users), [users])
  
  return (
    <UserDispatch.Provider value={dispatch}>
      <CreateUser/>
      <UserList users={users} />
      <div>Active users: {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
