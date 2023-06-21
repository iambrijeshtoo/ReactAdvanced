import { useState } from "react";

const UseEffectExample = () => {
  const [state, setState] = useState();

  // Normal function inside function component
  const myFunction = () => {
    console.log("I am function");
    // Changing state inside function, it will create an loop. Because every time state get updated it will rerender the function component and it will invoke again and again the normal function.
    setState(state + 1);
  };
  myFunction();

  return (
    <>
      <h3>{state}</h3>
      <button
        className="btn"
        onClick={() => {
          state + 1;
        }}
      ></button>
    </>
  );
};

export default UseEffectExample;
