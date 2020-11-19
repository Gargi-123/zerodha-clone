import React from 'react';
import {Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className="container-fluid border-bottom">
        <nav class="navbar fixed-top bg-white navbar-expand-lg navbar-light">
          <div className="container  py-3">
            <Link to="/"><img src="/logo.svg" alt="" style={{ width: "150px" }} /> </Link>

            <Link to="/Expand" class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </Link>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
              </ul>
              <form class="form-inline my-2 my-lg-0">
                <li class="nav-item">
                  <Link className="text-dark nav-link" to="/About">About</Link>
                </li>
                <li class="nav-item">
                  <Link className="text-dark nav-link" to="/Products">Products</Link>
                </li>
                <li class="nav-item">
                  <Link to="/Pricing" class="nav-link text-dark" >Pricing</Link>
                </li>
                <li class="nav-item">
                  <Link to="/Support" class="nav-link text-dark">Support</Link>
                </li>
                <li class="nav-item">
                  <Link to="/Signup" className="btn btn-primary px-4 py-1">Sign up</Link>
                </li>
                <li class="nav-item">
                  <Link to="/Expand" class="fa fa-bars mx-3 fa-lg text-dark" aria-hidden="true"></Link>
                </li>
              </form>
            </div>
          </div>
        </nav>
      </div>


        </>
    )
}