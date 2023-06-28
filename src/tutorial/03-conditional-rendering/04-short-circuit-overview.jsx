import { useState, useEffect } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");
  // truthy
  const [name, setName] = useState("batman");

  return (
    <div>
      <h4>Falsy AND: {text && "hello world"}</h4>
      <h4>Falsy AND: {text || "hello world"}</h4>
      <h4>truthy AND: {name && "hello world"}</h4>
      <h4>truthy AND: {name || "hello world"}</h4>
    </div>
  );
};

export default ShortCircuitOverview;
