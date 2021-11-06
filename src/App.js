import React from "react";

import {
  MemoryRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import AboutLayout from "./layouts/AboutLayout";

export default function App() {
  return (
    <Router>
      <div>
        <span>Hello</span>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                exact
                to="/"
              >
                Home 2
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="active"
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/about" element= {<AboutLayout />}/>
        
        <Route path="/" element={<HomeLayout />} />
      </Routes>
    </Router>
  );
}
