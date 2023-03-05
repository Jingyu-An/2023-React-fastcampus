import React, {useContext, useEffect} from "react";
import {UserDispatch} from "./App";

const User = React.memo(({user}) => {
  const { username, email, id, active } = user;
  const dispatch = useContext(UserDispatch);
  
  return (
    <div>
      <b style={{
        color: active ? 'green': 'black',
        cursor: 'pointer'
      }}
         onClick={() => dispatch({
           type: 'TOGGLE_USER',
           id
      })}>
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => dispatch({
        type: 'REMOVE_USER',
        id
      })}>Delete</button>
    </div>
  );
});

const UserList = ({users}) => {
  
  return (
    <div>
      {
        users.map(user =>
          (<User
            key={user.id}
            user={user}
          />))
      }
    </div>
  );
};

export default React.memo(UserList);