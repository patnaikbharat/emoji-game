import './index.css'

const NavBar = props => {
  const {topScore, score, isInProgress} = props

  return (
    <nav className="navbar">
      <div className="nav-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          className="logo"
          alt="emoji logo"
        />
        <h1 className="logo-text">Emoji Game</h1>
      </div>
      {isInProgress ? (
        <div className="nav-container">
          <p className="nav-text">Score: {score}</p>
          <p className="nav-text">Top Score: {topScore}</p>
        </div>
      ) : (
        <></>
      )}
    </nav>
  )
}

export default NavBar
