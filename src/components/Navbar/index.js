// Write your code here

import {Component} from 'react'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme, toggleTheme} = value

          const getChange = () => {
            toggleTheme()
          }

          return (
            <>
              {isDarkTheme === false ? (
                <nav className="nav1">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                      alt="website logo"
                      className="img1"
                    />
                  </div>
                  <ul>
                    <Link to="/" style={{textDecoration: 'none'}}>
                      <li className="ul2">Home</li>
                    </Link>
                    <Link to="/about" style={{textDecoration: 'none'}}>
                      <li className="ul2">About</li>
                    </Link>
                  </ul>
                  <div>
                    <button
                      className="btn1"
                      type="button"
                      onClick={getChange}
                      data-testid="theme"
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                        className="img1"
                        alt="theme"
                      />
                    </button>
                  </div>
                </nav>
              ) : (
                <nav className="nav2">
                  <div>
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                      alt="website logo"
                      className="img1"
                    />
                  </div>
                  <ul>
                    <Link to="/" style={{textDecoration: 'none'}}>
                      <li className="ul1">Home</li>
                    </Link>
                    <Link to="/about" style={{textDecoration: 'none'}}>
                      <li className="ul1">About</li>
                    </Link>
                  </ul>
                  <div>
                    <button
                      className="btn1"
                      type="button"
                      onClick={getChange}
                      data-testid="theme"
                    >
                      <img
                        src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                        className="img1"
                        alt="theme"
                      />
                    </button>
                  </div>
                </nav>
              )}
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}
export default Navbar
