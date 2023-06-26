import { useState } from "react";

const UseStateSetTimeout = () => {
  const [state, setState] = useState(0);

  const incrementCount = () => {
    setTimeout(() => {
      setState((currentState) => {
        const newState = currentState + 1;
        return newState;
      });
    }, 5000); // It is updating state after 5 sec with new value. Even if you click the button 10 times it will display after 5 sec and all the 10 increments.
  };
  return (
    <>
      <h3>{state}</h3>
      <button type="button" className="btn" onClick={incrementCount}>
        Increase
      </button>
    </>
  );
};

export default UseStateSetTimeout;
