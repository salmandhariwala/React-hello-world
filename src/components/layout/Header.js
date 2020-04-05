import React from "react";
import { Link } from "react-router-dom";

function header() {
  return (
    <header className="header-style">
      <h1>ToDo List</h1>
      <Link className="link-style" to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link className="link-style" to="/about">
        About
      </Link>
    </header>
  );
}

export default header;
