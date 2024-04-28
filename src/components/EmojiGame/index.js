import {Component} from 'react'
import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {topScore: 0, selectedEmojisList: [], isInProgress: true}

  shuffleEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  resetGame = () => {
    this.setState({selectedEmojisList: [], isInProgress: true})
  }

  displayResult = () => {
    const {selectedEmojisList} = this.state
    const {emojisList} = this.props
    const isWon = selectedEmojisList.length === emojisList.length

    return (
      <WinOrLoseCard
        score={selectedEmojisList.length}
        isWon={isWon}
        playAgain={this.resetGame}
      />
    )
  }

  finishGameAndSetTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > newTopScore) {
      newTopScore = currentScore
    }
    this.setState({topScore: newTopScore, isInProgress: false})
  }

  onClickEmoji = id => {
    const {selectedEmojisList} = this.state
    const {emojisList} = this.props
    const isIncludes = selectedEmojisList.includes(id)

    if (isIncludes) {
      this.finishGameAndSetTopScore(selectedEmojisList.length)
    } else {
      if (selectedEmojisList.length === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        selectedEmojisList: [...prevState.selectedEmojisList, id],
      }))
    }

    /* this.setState(prevState => ({
      selectedEmojisList: prevState.selectedEmojisList.map(eachEmoji => {
        if (eachEmoji.id !== id) {
          return [...prevState.selectedEmojisList, eachEmoji]
        }
        return [...prevState.selectedEmojisList]
      }),
    })) */
  }

  displayEmojisList = () => {
    const listOfShuffledEmoji = this.shuffleEmojisList()

    return (
      <ul className="emoji-container">
        {listOfShuffledEmoji.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {selectedEmojisList, topScore, isInProgress} = this.state

    return (
      <div className="app-container">
        <NavBar
          topScore={topScore}
          score={selectedEmojisList.length}
          isInProgress={isInProgress}
        />
        <div className="game-bg-container">
          {isInProgress ? this.displayEmojisList() : this.displayResult()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
