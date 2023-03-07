import React from 'react';
import axios from "axios";
import {useAsync} from "react-async";

const getUser = async ({id}) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`);
  return response.data;
};

const User = ({id}) => {
  const {data: user, error, isLoading} = useAsync({
    promiseFn: getUser,
    id,
    watch    : id,
  })
  
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!!</div>;
  if (!user) return null;
  return (
    <div>
      <h2>{user.username}</h2>
      <p>
        <b>Email: </b> {user.email}
      </p>
    </div>
  );
};

export default User;