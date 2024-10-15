import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="not-foun-bg-container">
          <Navbar />
          <div
            className={`not-found-container ${
              isDarkTheme ? 'not-found-bg-dark' : ''
            }`}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt='not found'
              className="not-found-img"
            />
            <h1
              className={`lost-your-way ${
                isDarkTheme
                  ? 'lost-your-way-dark-theme'
                  : 'lost-your-way-light-theme'
              }`}
            >
              Lost Your Way?
            </h1>
            <p
              className={`lost-your-way-description ${
                isDarkTheme
                  ? 'lost-your-way-description-dark-theme'
                  : 'lost-your-way-description-light-theme'
              }`}
            >
              we cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
