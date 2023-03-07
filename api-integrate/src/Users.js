import React, {useState} from 'react';
import axios from "axios";
import {useAsync} from "react-async";
import User from "./User";

const getUsers = async () => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users/');
  return response.data;
};

const Users = () => {
  const [userID, setUserID] = useState(null);
  const {data: users, error, isLoading, reload, run} = useAsync({
    promiseFn: getUsers
  });
  
  
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error!!</div>
  if (!users) return <button onClick={run}>Load</button>
  
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id} onClick={() => setUserID(user.id)} style={{cursor: "pointer"}}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={reload}>Reload</button>
      {userID && <User id={userID}/>}
    </>
  );
};

export default Users;