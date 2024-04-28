import './index.css'

const WinOrLoseCard = props => {
  const {score, isWon, playAgain} = props
  let eachElement
  const elements = isWon
    ? (eachElement = {
        result: 'Won',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/won-game-img.png',
        scoreLabel: 'Best Score',
      })
    : (eachElement = {
        result: 'Lose',
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png',
        scoreLabel: 'Score',
      })

  const onClickPlayAgain = () => {
    playAgain()
  }

  return (
    <div className="win-or-lose-bg-container">
      <div className="flex-container">
        <h1 className="result">You {elements.result}</h1>
        <p className="best-score">{elements.scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          className="play-again-button"
          type="button"
          onClick={onClickPlayAgain}
        >
          Play Again
        </button>
      </div>
      <img src={elements.imgUrl} className="image" alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
