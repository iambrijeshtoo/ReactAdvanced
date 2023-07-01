import "./App.css";
// import ExportGroup from "./tutorial/04-project-structure/Example";
import { Home, About } from "./tutorial/04-project-structure/Pages";

function App() {
  return (
    <div className="container">
      <Home />
      <About />
      {/* <ExportGroup /> */}
    </div>
  );
}

export default App;
