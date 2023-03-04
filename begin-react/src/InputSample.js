import React, {useState} from "react";

const InputSample = () => {
  
  const [inputs, setInputs] = useState({
    name    : '',
    nickname: ''
  });
  
  const {name, nickname} = inputs;
  
  const onChange = (e) => {
    const {name, value} = e.target;
    
    setInputs({
      ...inputs,
      [name]: value
    });
  };
  
  const onReset = () => {
    setInputs({
      name    : '',
      nickname: ''
    });
  };
  
  return (
    <div>
      <input name="name" placeholder="Name" onChange={onChange} value={name}/>
      <input name="nickname" placeholder="Nickname" onChange={onChange} value={nickname}/>
      <button onClick={onReset}>Reset</button>
      <div>
        <b>Value: </b>
        {name} ({nickname})
      </div>
    </div>
  )
};

export default InputSample;