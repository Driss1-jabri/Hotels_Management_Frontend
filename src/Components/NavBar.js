
import React from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/Images/Black Gold Modern Circle Monoline Hotel Branding Logo (1).png";
const NavBar = () => {
  const scrollToSection = (id) => {

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="container-fluid position-fixed top-0 p-0"
      style={{ backgroundColor: "white", zIndex: 1 }}
    >
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link to="/" className="navbar-brand p-0">
          <h1 className="text-primary m-0">
            <img src={logo} alt="" />
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <Link
              to="/"
              className="nav-item nav-link active"
              
            >
              Accueil
            </Link>
            <Link
              to="/about"
              className="nav-item nav-link"
              
            >
              À propos
            </Link>
            <Link
              to="/gallery"
              className="nav-item nav-link"
              
            >
              Gallerie
            </Link>
            <Link
              to="/hotels"
              className="nav-item nav-link"
              
            >
              Hotels
            </Link>
            <Link
              to="/contact"
              className="nav-item nav-link"
              
            >
              Contact
            </Link>
          </div>
          <Link to="/" className="btn btn-primary rounded-pill py-2 px-4">
            S'inscrire
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
