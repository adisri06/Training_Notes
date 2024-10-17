import React from 'react';
import '../css/NavComponent.css'; // Import your CSS file
import { Link } from 'react-router-dom';
// replaces the a with link and href with to and it becomes a single page application
function NavComponent() {
  return (
    <div className="nav-container">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/table">Employee Cards</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/registeration">Employee registeration</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/database">Employee Database</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavComponent;