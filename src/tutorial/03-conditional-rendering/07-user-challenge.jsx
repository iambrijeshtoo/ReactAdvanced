import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    // Normally we connect to database or api but for this example we are hard coding the value.
    setUser({ name: "batman" });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h4>Hello {user.name}</h4>
          <button className="btn" onClick={logout}>
            Logout
          </button>
        </div>
      ) : (
        <div>
          <h4>Please login</h4>
          <button className="btn" onClick={login}>
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
