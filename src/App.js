import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Portpolio from "./Pages/Portpolio";
import Contact from "./Pages/Contact";
import { Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? "nav-toggle" : ""}`}>
        <NavBar />
      </div>
      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/about" exact>
              <About />
            </Route>
            <Route path="/portpolio" exact>
              <Portpolio />
            </Route>
            <Route path="/contact" exact>
              <Contact />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
