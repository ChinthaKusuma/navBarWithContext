// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
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
                  src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                  alt="home"
                  className="home1"
                />
                <h1>Home</h1>
              </div>
            </div>
          ) : (
            <div className="one1">
              <Navbar />
              <hr />
              <div className="home2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                  alt="home"
                  className="home1"
                />
                <h1 className="ul1">Home</h1>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
