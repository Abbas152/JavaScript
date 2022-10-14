import React from 'react'
import PropTypes from 'prop-types'

{/* Usually We Don't Change Props In React Function Component. */ }
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.Title}</a> {/* Props  */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">

              <a className="nav-link" href="/">{props.About}</a> {/* Props  */}
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">CTA</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/">Contact</a></li>
              </ul>
            </li>
          </ul>
          {/* Below We Use Ternary Operator  */}
          <div className={`form-check form-switch text-${props.darkMode === "light"?"dark":"light"} mx-5`}>
            <input className="form-check-input" onClick={props.toggleDarkMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
          <div className={`form-check form-switch text-${props.greenMode === "light"?"dark":"light"} mx-5`}>
            <input className="form-check-input" onClick={props.toggleGreenMode} type="checkbox" role="switch" id="green"/>
              <label className="form-check-label" htmlFor="green">Enable GreenMode</label>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>

        </div>
      </div>
    </nav>
  )
}

// *********************
// This is  propTypes
// This is Used for When We Must Need Specifically DataType. 
// For Example In Our Case We Need String for Our Title and About
Navbar.propTypes = {
  Title: PropTypes.string.isRequired,
  About: PropTypes.string.isRequired,
}



// *********************
// This is Default Props 
Navbar.defaultProps = {
  Title: "Set Title Here",
  About: "Set About Here",
}

