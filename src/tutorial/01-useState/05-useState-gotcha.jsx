import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState("I am current state");

  const incrementCount = () => {
    setCount((currentState) => { // currentState == count
      const newState = currentState + 1;
      return newState;
    });
  };
  return (
    <>
      <h3>{count}</h3>
      <button type="button" className="btn" onClick={incrementCount}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
