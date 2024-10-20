import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <Link to="/">
            <img
              src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
              className="headerLogo"
              alt="website logo"
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default Header
