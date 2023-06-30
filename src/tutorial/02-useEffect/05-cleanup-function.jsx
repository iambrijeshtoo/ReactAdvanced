import { useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h1>Cleanup function</h1>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Toggle component
      </button>
      {toggle && <MyComponent />}
    </div>
  );
};

const MyComponent = () => {
  useEffect(() => {
    // Task running
    const task = setInterval(() => {
      console.log("task running");
    }, 1000);

    // Cleanup function run after the component render and before the useEffect
    return () => {
      clearInterval(task);
      console.log("task clean");
    };
  }, []);

  return <h1>My Component</h1>;
};

export default CleanupFunction;
