import {createContext, useContext, useState} from "react";


const MyContext = createContext('defaultValue');

const Child = () => {
  const text = useContext(MyContext);
  return <div>Hello, {text}</div>
};

const Parent = () => {
  return <Child />
};

const GrandParent = () => {
  return <Parent />
}

const ContextSample = () => {
  const [value, setValue] = useState(true);
  return (
    <MyContext.Provider value={value? 'GOOD' : 'BAD'}>
      <GrandParent text='GOOD' />
      <button onClick={() => setValue(!value)}>CLICK ME</button>
    </MyContext.Provider>
  );
}

export default ContextSample;