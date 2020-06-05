import '../styles/navbar.scss'
import Link from 'next/link'

const NavBar = () => (
<nav className ="navbar" role="navigation" aria-label="main navigation">
  <div className ="navbar-brand">
    <a className ="navbar-item" href="https://bulma.io">
      <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"></img>
    </a>

    <a role="button" className ="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" className ="navbar-menu">
    <div className ="navbar-start">
      <div className ="navbar-item">
        <Link href="/index">Home</Link>
      </div>

      <div className = "navbar-item">
        <Link href="/about">About</Link>
      </div>

      <div className ="navbar-item has-dropdown is-hoverable">
        <a className ="navbar-link">
          More
        </a>

        <div className ="navbar-dropdown">
          <a className ="navbar-item">
            About
          </a>
          <a className ="navbar-item">
            Jobs
          </a>
          <a className ="navbar-item">
            Contact
          </a>
          <hr className ="navbar-divider"></hr>
          <a className ="navbar-item">
            Report an issue
          </a>
        </div>
      </div>
    </div>

    <div className ="navbar-end">
      <div className ="navbar-item">
        <div className ="buttons">
          <a className ="button has-background-white">
            <strong>
              <Link href="/signup">Signup</Link>
            </strong>
          </a>
          <a className ="button is-light">
            Login
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
)

export default NavBar



{/* <nav className Name="navbar" role="navigation" aria-label="main navigation">
<div className Name="container">
  <div className Name="navbar-brand">
    <a className Name="navbar-item" href="/">
      <img src="/static/shadow.png" alt="Shadow"/>
    </a>
  </div>

  <div className Name="navbar-menu">
    <div className Name="navbar-end">
      <div className Name="navbar-item">
        <Link href="/about">About</Link>
      </div>

    </div>
  </div>
</div>
</nav> */}