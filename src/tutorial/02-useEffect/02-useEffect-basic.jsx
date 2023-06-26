import { useState, useEffect } from "react";

const UseEffectBasic = () => {
  const [state, setState] = useState();

  const myFunction = () => {
    console.log("I'm function");
  };
  myFunction();

  useEffect(() => {
    console.log("I'm useEffect");
  }, []); // Second argument is empty dependency array that's why it will render only one tile at initial render.

  return (
    <>
      <h3>{state}</h3>
      <button className="btn" onClick={() => setState(state + 1)}></button>
    </>
  );
};

export default UseEffectBasic;
