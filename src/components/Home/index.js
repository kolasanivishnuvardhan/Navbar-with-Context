import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div className="home-bg-container">
          <Navbar />
          <div className={`home-container ${isDarkTheme ? 'bg-dark' : ''}`}>
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
              }
              className="home-light-img"
              alt="home"
            />
            <h1
              className={`home-name ${
                isDarkTheme ? 'home-name-dark-theme' : 'home-name-light-theme'
              }`}
            >
              Home
            </h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
