import { useState } from "react";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.email);
    setName(e.target.name);
    setEmail(e.target.email);
  };

  return (
    <form className="form">
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          className="form-input"
          value={name}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          id="email"
          className="form-input"
          value={email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};

export default ControlledInputs;
