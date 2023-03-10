import React from "react";
import {useRef, useState} from "react";


const InputSample = () => {
  
  const [inputs, setInputs] = useState({
    name    : '',
    nickname: ''
  });
  
  const nameInput = useRef();
  
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
    nameInput.current.focus();
  };
  
  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
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