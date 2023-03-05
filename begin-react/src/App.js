import React, {useCallback, useMemo, useRef, useState} from "react";
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

const countActiveUsers = (users) => {
  console.log('counting...');
  return users.filter(user => user.active).length;
};

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email   : ''
  });
  
  const {username, email} = inputs;
  
  const onChange = useCallback((e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  },[inputs]);
  
  const [users, setUsers] = useState([
    {
      id      : 1,
      username: 'John',
      email: 'john@example.com',
      active: true
    },
    {
      id      : 2,
      username: 'Jane',
      email   : 'jane@example.com',
      active: false
    },
    {
      id      : 3,
      username: 'Tim',
      email   : 'tim@example.com',
      active: false
    }
  ]);
  
  const nextID = useRef(4);
  
  const onCreate = useCallback(() => {
    
    const user = {
      id: nextID.current,
      username,
      email
    };
    
    setUsers(users => [...users, user]);
    // setUsers(users.concat(user))
    
    nextID.current += 1;
    setInputs({
      username: '',
      email   : ''
    })
  },[username, email]);
  
  const onRemove = useCallback((id) => {
    setUsers(users => users.filter(user => user.id !== id));
  }, []);
  
  const onToggle = useCallback((id) => {
    setUsers(users => users.map(
      user => user.id === id
        ? { ...user, active: !user.active}
        : user
    ))
  }, []);
  
  const count = useMemo(() => countActiveUsers(users), [users]);
  
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>Active users: {count}</div>
    </>
  );
}

export default App;
