import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handelChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div>
      <form className="form" onSubmit={handelSubmit}>
        <h2>MultipleInputs</h2>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={user.name}
            onChange={handelChange}
            name="name"
          />
        </div>
        {/* Email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={user.email}
            onChange={handelChange}
            name="email"
          />
        </div>
        {/* Password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={user.password}
            onChange={handelChange}
            name="password"
          />
        </div>
      </form>
    </div>
  );
};

export default MultipleInputs;
