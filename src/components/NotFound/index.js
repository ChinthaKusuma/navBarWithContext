// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          {' '}
          {isDarkTheme === false ? (
            <>
              <Navbar />
              <hr />
              <div className="home2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="home1"
                />
                <h1>Lost Your Way?</h1>
                <p>We Cannot seem to find the page you are looking for</p>
              </div>
            </>
          ) : (
            <div className="one1">
              <Navbar />
              <hr />
              <div className="home2">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                  alt="not found"
                  className="home1"
                />
                <h1 className="ul1">Lost Your Way?</h1>
                <p className="ul1">
                  We Cannot seem to find the page you are looking for
                </p>
              </div>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
