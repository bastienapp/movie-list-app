import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <Link to="/movies">Movie List</Link>
    </div>
  );
}

export default NavBar;
