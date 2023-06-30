// import { useState } from "react";

// const CleanupFunction = () => {
//   const [toggle, setToggle] = useState(false);

//   return (
//     <div>
//       <h1>Cleanup function</h1>
//       <button
//         className="btn"
//         onClick={() => {
//           setToggle(!toggle);
//         }}
//       >
//         Toggle component
//       </button>
//       {toggle && <MyComponent />}
//     </div>
//   );
// };

// const MyComponent = () => {
//   useEffect(() => {
//     const someFunction = () => {
//       // some logic
//     };
//     window.addEventListener("scroll", someFunction);
//     return () => window.removeEventListener("scroll", someFunction);
//   }, []);

//   return <h1>My Component</h1>;
// };

// export default CleanupFunction;
