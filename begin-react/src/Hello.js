import React from "react";

const Hello = ({color, name}) => {
  return <div style={{
    color
  }}>Hello {name}</div>;
};

Hello.defaultProps = {
  name : 'John'
}

export default Hello;