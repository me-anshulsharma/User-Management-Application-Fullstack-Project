import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand" to="/">
            <h2>&lt;/&gt;</h2>
          </Link>
          <div className="flex-grow-1 text-center">
            <h4 className="text-light mb-0">USER MANAGEMENT SYSTEM</h4>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto"></ul>
            <Link className="btn btn-outline-light ms-3" to="/adduser">
              Add New User
            </Link>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .navbar h4 {
          flex-grow: 1;
          margin-left: 50%; /* Adjust the left margin for centering */
        }
      `}</style>
    </div>
  );
}
