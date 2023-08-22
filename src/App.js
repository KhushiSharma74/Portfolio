// import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Main from "./components/Main";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/" element={<Main />} />
          {/* <Route path="/Skills">
            <Skills />
          </Route> */}
        </Routes>
      </Router>

      {/* <Form></Form> */}
    </div>
  );
}

export default App;
