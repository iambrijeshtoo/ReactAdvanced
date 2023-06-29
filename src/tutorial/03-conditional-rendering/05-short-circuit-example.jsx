import { useState, useEffect } from "react";

const ShortCircuitExample = () => {
  // falsy value
  const [text, setText] = useState("");
  // truthy value
  const [name, setName] = useState("batman");
  const [user, setUser] = useState({ name: "superman" });
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div>
      <h2>{text || "default value"}</h2>
      {text && (
        <div>
          <h2>{name}</h2>
        </div>
      )}
      {/* {!text && (
        <div>
          <h2>{name}</h2>
        </div>
      )} */}
      {user && <MyComponent name={user.name} />}
      <h2 style={{ margin: "1rem 0" }}>Ternary operator</h2>
      <button className="btn">{isEditing ? "edit" : "add"}</button> 
    </div>
  );
};

const MyComponent = ({ name }) => {
  return (
    <div>
      <h4>{name}</h4>
    </div>
  );
};

export default ShortCircuitExample;
