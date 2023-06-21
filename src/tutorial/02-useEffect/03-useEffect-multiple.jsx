import { useState, useEffect } from "react";

const UseEffectMultiple = () => {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    console.log("I'm first useEffect");
  }, []);

  useEffect(() => {
    console.log("I'm second useEffect");
  }, []);

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
