import React, {useRef, useState} from "react";
import './App.css';
import UserList from "./UserList";
import CreateUser from "./CreateUser";

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email   : ''
  });
  
  const {username, email} = inputs;
  
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    })
  };
  
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
  
  const onCreate = () => {
    
    const user = {
      id: nextID.current,
      username,
      email
    };
    
    setUsers([...users, user]);
    // setUsers(users.concat(user))
    
    nextID.current += 1;
    setInputs({
      username: '',
      email   : ''
    })
  };
  
  const onRemove = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };
  
  const onToggle = (id) => {
    setUsers(users.map(
      user => user.id === id
        ? { ...user, active: !user.active}
        : user
    ))
  };
  
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onCreate={onCreate}
        onChange={onChange}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
    </>
  );
}

export default App;
