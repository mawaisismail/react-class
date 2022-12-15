import "./App.css";
import Child from "./components/child";
import { useCallback, useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  const complexComputation = (num) => {
    let i = 0;
    console.time("complexComputation");
    for (i = 0; i < 1000000000; i++) {
      num += 1;
    }
    console.timeEnd("complexComputation");
    return num;
  };
  const expensiveValue = useMemo(() => complexComputation(count), [count]);
  const handleCount = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, []);

  // const value = useMemo(() => complexComputation(count), [count]);

  return (
    <div className="App">
      <p>Parent Component : {count1}</p>
      <p>Complex value {expensiveValue}</p>

      <button onClick={() => setCount1(count1 + 1)}>handle count</button>
      <hr />
      <Child count={count} handleCount={handleCount} />
    </div>
  );
}

export default App;
