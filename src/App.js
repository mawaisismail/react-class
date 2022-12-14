import logo from "./logo.svg";
import "./App.css";
import { Welcome } from "./components/Welcome";
import { useState } from "react";

function App() {
  const [isshow, setIsShow] = useState(true);
  return (
    <div className="App">
      {isshow ? <Welcome name="Awais" /> : <></>}
      <button onClick={() => setIsShow((prevState) => !prevState)}>
        is called
      </button>
    </div>
  );
}

export default App;
