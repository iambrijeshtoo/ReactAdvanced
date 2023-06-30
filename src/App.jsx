import "./App.css";
import Navbar from "./tutorial/04-project-structure/Navbar";
import { About, Home } from "./tutorial/04-project-structure/Pages";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
