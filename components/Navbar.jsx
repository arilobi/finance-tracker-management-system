import React from "react";

function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Finance Tracker</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Expenses</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Budget</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Settings</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}