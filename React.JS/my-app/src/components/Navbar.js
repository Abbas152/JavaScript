import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
{/* Usually We Don't Change Props In React Function Component. */ }
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.darkMode} bg-${props.darkMode} `}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.Title}</Link> {/* Props  */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.About}</Link> {/* Props  */}
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                More
              </Link>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/">CTA</Link></li>
                <li><Link className="dropdown-item" to="/">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="/">Contact</Link></li>
              </ul>
            </li>
          </ul>
          {/* Below We Use Ternary Operator  */}
         <div className={`form-check form-switch text-${props.darkMode === "light"?"dark":"light"} mx-5`}>
            <input className="form-check-input"  onClick={()=>{props.toggleDarkMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
          <div className="d-flex">
            <div className="bg-primary rounded mx-2" onClick={()=>{props.ColorPallete("primary")}} style={{height:"30px",width:"30px", cursor:'pointer'}}></div>
            <div className="bg-success rounded mx-2" onClick={()=>{props.ColorPallete("success")}} style={{height:"30px",width:"30px", cursor:'pointer'}}></div>
            <div className="bg-warning rounded mx-2" onClick={()=>{props.ColorPallete("warning")}} style={{height:"30px",width:"30px", cursor:'pointer'}}></div>
            <div className="bg-danger rounded mx-2" onClick={()=>{props.ColorPallete("danger")}} style={{height:"30px",width:"30px", cursor:'pointer'}}></div>
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

 