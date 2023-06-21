import { useState } from "react";

const UseStateObjectExample = () => {
    const [name, setName] = useState("Peter");
    const [age  , setAge] = useState(24);
    const [hobby, setHobby] = useState("Reading books");

    const displayPerson = () => {
        setName("John");
        setAge(28);
        setHobby("Playing games");
    }
    return <>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h4>Enjoys to: {hobby}</h4>
        <button className="btn" onClick={displayPerson}>Show John</button>
    </>
}
export default UseStateObjectExample;