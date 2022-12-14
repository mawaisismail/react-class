import { Component } from "react";

export class LoginButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>Login Button</p>
        <button onClick={this.props.handleClick}>Click me</button>
      </div>
    );
  }
}
