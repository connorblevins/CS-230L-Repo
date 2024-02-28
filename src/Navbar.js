import React from "react";

function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <span class="navbar-brand mb-0 h1 mx-sm-2">Navbar</span>

  <div class="collapse navbar-collapse" id="navbarNav">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home<span class="sr-only"></span></a>
      <a class="nav-item nav-link" href="#">About</a>
      <a class="nav-item nav-link" href="#">Contact</a>
    </div>
  </div>
  <form class="form-inline">
    <div class="d-flex">
    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success mx-sm-2" type="submit">Search</button>
    </div>
  </form>
</nav>
  )
}
export default Navbar;