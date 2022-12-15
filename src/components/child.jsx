import { memo } from "react";

const Child = ({ count, handleCount }) => {
  console.log("child mount");
  return (
    <div>
      <p>Child component :{count}</p>
      <button onClick={handleCount}>handle count</button>
    </div>
  );
};

export default memo(Child);
