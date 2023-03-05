import React, {useEffect} from "react";

const User = React.memo(({user, onRemove, onToggle}) => {
  const { username, email, id, active } = user;
  
  // useEffect(() => {
  //   console.log('user')
  //   return () => {
  //     console.log('user done')
  //   };
  // }, [user]);
  
  return (
    <div>
      <b style={{
        color: active ? 'green': 'black',
        cursor: 'pointer'
      }} onClick={() => onToggle(id)}>
        {username}
      </b>
      <span>({email})</span>
      <button onClick={() => onRemove(id)}>Delete</button>
    </div>
  );
});

const UserList = ({users, onRemove, onToggle}) => {
  
  return (
    <div>
      {
        users.map(user =>
          (<User
            key={user.id}
            user={user}
            onRemove={onRemove}
            onToggle={onToggle}
          />))
      }
    </div>
  );
};

export default React.memo(UserList);