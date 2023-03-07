import React, {Component} from "react";

class Hello extends Component {
  static defaultProps = {
    name: 'John'
  }
  render() {
    const { color, isSpecial, name} = this.props;
    return (
      <div style={{color}}>
        {isSpecial && <b>*</b>}
        Hello, {name}
      </div>
    );
  }
}


// Hello.defaultProps = {
//   name: 'John'
// }

export default Hello;