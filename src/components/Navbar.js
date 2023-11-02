import React, {useEffect} from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
console.log(location.pathname); // logs the current URL to the console
  }, [location]);

  return ( 
    <div>
      <nav className="navbar navbar-expand-lg bg-body-secondary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            iNoteBook
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/"? "highlighted" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/addnote"? "highlighted" : ""}`} aria-current="page" to="/addnote">
                  Add a note
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/allnotes"? "highlighted" : ""}`} aria-current="page" to="/allnotes">
                  View all my notes
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/about"? "highlighted" : ""}`} to="/about">
                  About
                </Link>
              </li>
              
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
