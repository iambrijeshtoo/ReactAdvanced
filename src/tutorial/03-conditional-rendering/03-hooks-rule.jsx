import { useState, useEffect } from "react";

const HooksRule = () => {
  const [condition, setCondition] = useState(true);

  // Hooks can not use inside the condition.
  // if (condition) {
  //   // won't work
  //   const [state, setState] = useState(false);
  // }

  // Hooks can not be used after the condition.
  // - In the below example you are returning something after the condition is satisfied. After that code will stop executing and the hook below the condition will not execute.
  if (condition) {
    return <h2>Hello There</h2>;
  }
  // this will also fail
  useEffect(() => {
    console.log("hello there");
  }, []);
  return <h2>example</h2>;
};

export default HooksRule;
