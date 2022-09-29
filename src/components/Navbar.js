import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Thieves News</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/contact">Contact Me</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/news">News</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/feed">Binstagram</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link" to="/posts/create">Create Post</Link>
                    </li>
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/login">Login</a></li>
                        <li><a className="dropdown-item" href="/signup">SignUp</a></li>
                        <li><hr className="dropdown-divider"/></li>
                    </ul>
                    </li>
                    <li className="nav-item">
                    </li>
                </ul>
              
                </div>
            </div>
            </nav>
      </div>
    )
  }
}
