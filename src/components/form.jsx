import { Component } from "react";
import Prism from "prismjs";
export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  componentDidMount() {
    Prism.highlightAll();
    console.log("component did mount");
  }

  componentWillUnmount() {
    console.log("component will unmount");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("shouldUpdate", nextState);
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("will update");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("component did updated");
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <legend>Enter temperature in Celsius:</legend>
        <p>count : {count}</p>
        <button onClick={() => this.setState({ count: count + 1 })}>
          Submit
        </button>
      </>
    );
  }
}
