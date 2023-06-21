import { useState } from "react";

const UseStateObjectExample = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 23,
    hobby: "Reading books",
  });

  const displayPerson = () => {
    setPerson({ name: "John", age: 28, hobby: "Playing games" });
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys to: {person.hobby}</h4>
      <button className="btn" onClick={displayPerson}>
        Show John
      </button>
    </>
  );
};
export default UseStateObjectExample;
