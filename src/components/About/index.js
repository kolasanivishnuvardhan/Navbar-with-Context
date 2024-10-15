import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div
          className={`about-bg-container ${isDarkTheme ? 'about-bg-dark' : ''}`}
        >
          <Navbar />
          <div className="about-container">
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              className="about-light-img"
              alt="about"
            />
            <h1
              className={`about-name ${
                isDarkTheme ? 'about-name-dark' : 'about-name-light'
              }`}
            >
              About
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
