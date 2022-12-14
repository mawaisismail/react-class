import { Component } from "react";
import { LoginButton } from "./LoginButton";

export class Welcome extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = { date: new Date(), toggle: true };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  handleClick() {
    console.log("Clicked", this);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <p>Welcome from Welcome Clas {this.state.date.toLocaleTimeString()}</p>
        <LoginButton handleClick={this.handleClick} />
      </div>
    );
  }
}
