import { useState } from "react";
import { data } from "../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if 'name' is empty or falsy. If so, stop executing further and return.
    if (!name) return;
    const fakeId = Date.now();
    // console.log(fakeId);
    const newUser = { id: fakeId, name: name };
    const updatedUser = [...users, newUser];
    setUsers(updatedUser);
    setName("");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>User Challenge</h2>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* Rendering users below */}
      <h2>Users name list</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h2>{user.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default UserChallenge;
