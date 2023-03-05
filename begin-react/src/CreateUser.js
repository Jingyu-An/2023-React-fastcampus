import React from 'react';

const CreateUser = ({ username, email, onChange, onCreate}) => {
  
  
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