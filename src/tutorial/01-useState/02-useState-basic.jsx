import { useState } from "react";

const UseStateBasic = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>useState basic</h1>
      <h3>Button clicked {count} times</h3>
      <button type="button" className="btn" onClick={increment}>
        remove
      </button>
    </div>
  );
};

export default UseStateBasic;
