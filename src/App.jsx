import "./App.css";
import UseStateSetTimeout from "./tutorial/01-useState/06-useState-set-timeout";
// import ErrorExample from "./tutorial/01-useState/01-error-example";
// import UseStateBasic from "./tutorial/01-useState/02-useState-basic";
// import { UseStateArrayExample } from "./tutorial/01-useState/03-useState-array";
// import UseStateObjectExample from "./tutorial/01-useState/04-useState-object";
// import UseStateGotcha from "./tutorial/01-useState/05-useState-gotcha";

function App() {
  return (
    <div className="container">
      {/* <ErrorExample /> */}
      {/* <UseStateBasic /> */}
      {/* <UseStateArrayExample /> */}
      {/* <UseStateObjectExample/> */}
      {/* <UseStateGotcha /> */}
      <UseStateSetTimeout />
    </div>
  );
}

export default App;
