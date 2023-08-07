import { useState } from "react";

const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping">Free Shipping</label>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework">Framework</label>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default OtherInputs;