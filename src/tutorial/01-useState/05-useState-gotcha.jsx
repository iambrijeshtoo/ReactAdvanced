import { useState } from "react";

const UseStateGotcha = () => {
  const [state, setState] = useState("I am current state");

  const incrementCount = () => {
    // setState() use for updating the state but it doesn't update the state live. It's lag behind. To update the state live as soon as possible we need to pass the state (currentState) in side the setState() as argument with anonymous function.
    setState((currentState) => {
      const newState = currentState + 1; // currentState == state
      return newState;
    });
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

export default UseStateGotcha;
