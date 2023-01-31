import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.js";
import Animation from "./components/Animation";
import Hoc from "./components/Hoc.js";

function App() {
  return (
    <Router>
      <>
        <h1>React Routing  , Animation , Higher Order Components Example</h1>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/Animation">Animation</Link>
        </li>
        <li>
          <Link to="/Hoc">Higher order components</Link>
        </li>
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Animation" element={<Animation />} />
          <Route exact path="/Hoc" element={<Hoc />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
