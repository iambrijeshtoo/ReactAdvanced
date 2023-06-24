import { useState, useEffect } from "react";

const UseEffectMultiple = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  // When you add dependency array inside the useEffect as a second parameter it will invoke the first parameter which is call back function. As many time as many value are inside the dependency array.
  // For example we are using counting here as second parameter (dependency array). As many times we click on button. The increment happen and that many times useEffect will executed.
  // If you click button 10 time it will show 10 increments and 10 times "I'm first useEffect".
  useEffect(() => {
    console.log("I'm first useEffect");
  }, [firstValue]);

  useEffect(() => {
    console.log("I' second useEffect");
  }, [secondValue]);

  return (
    <div>
      <h1>First value: {firstValue}</h1>
      <button
        className="btn"
        onClick={() => {
          setFirstValue(firstValue + 1);
        }}
      >
        Get first value
      </button>
      <h1> Second value: {secondValue}</h1>
      <button
        className="btn"
        onClick={() => {
          setSecondValue(secondValue + 1);
        }}
      >
        Get second value
      </button>
    </div>
  );
};

export default UseEffectMultiple;
