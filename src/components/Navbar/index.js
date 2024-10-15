import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onClickChangeThemeBtn = () => {
        toggleTheme()
      }
      console.log(isDarkTheme)
      return (
        <nav
          className={`navbar-bg-container ${isDarkTheme ? 'nav-bg-dark' : ''}`}
        >
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            className="light-theme-website-logo"
            alt="website logo"
          />

          <ul className="nav-items-container">
            <li className="nav-items">
              <Link
                to="/"
                className={`link-home-name ${
                  isDarkTheme ? 'nav-items-dark-theme' : 'nav-items-light-theme'
                }`}
              >
                Home
              </Link>
            </li>
            <li className="nav-items light-theme">
              <Link
                to="/about"
                className={`link-home-name ${
                  isDarkTheme ? 'nav-items-dark-theme' : 'nav-items-light-theme'
                }`}
              >
                About
              </Link>
            </li>
          </ul>

          <button
            className="light-dark-theme-btn"
            type="button"
            onClick={onClickChangeThemeBtn}
            data-testid="theme"
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              className="light-dark-theme-img"
              alt="theme"
            />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
