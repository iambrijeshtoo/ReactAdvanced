import { useState } from "react";

const UseStateObjectExample = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 23,
    hobby: "Reading books",
  });

  const displayPerson = () => {
    // Update all value of the object
    // setPerson({ name: "John", age: 28, hobby: "Playing games" });

    // Update only one value in the object other value will be the default
    setPerson({ ...person, name: "Kali" });
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
