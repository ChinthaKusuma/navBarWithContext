// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {isDarkTheme === false ? (
            <div>
              <Navbar />
              <hr />
              <div className="home2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                  alt="about"
                  className="home1"
                />
                <h1>About</h1>
              </div>
            </div>
          ) : (
            <div className="one1">
              <Navbar />
              <hr />
              <div className="home2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                  alt="about"
                  className="home1"
                />
                <h1 className="ul1">About</h1>
              </div>
              )
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
