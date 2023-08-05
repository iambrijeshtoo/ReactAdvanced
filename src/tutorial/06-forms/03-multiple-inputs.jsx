import { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <form className="form">
        <h2>MultipleInputs</h2>
        {/* name */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" className="form-input" id="name" />
        </div>
        {/* Email */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" className="form-input" id="email" />
        </div>
        {/* Password */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input type="password" className="form-input" id="password" />
        </div>
      </form>
    </div>
  );
};

export default MultipleInputs;
