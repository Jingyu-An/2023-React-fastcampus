import React, {useEffect, useReducer, useState} from 'react';
import axios from "axios";
import useAsync from "./useAsync";
import User from "./User";

const getUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/');
  return response.data;
};

const Users = () => {
  const [state, fetchUsers] = useAsync(getUsers, [], true);
  const [userID, setUserID] = useState(null);
  
  const { loading, data: users, error } = state;
  
  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!!</div>
  if (!users) return <button onClick={fetchUsers}>Load</button>
  
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => setUserID(user.id)} style={{cursor:"pointer"}}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>Reload</button>
      {userID && <User id={userID}/>}
    </>
  );
};

export default Users;