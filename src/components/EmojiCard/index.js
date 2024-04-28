import './index.css'

const emojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails

  const byClickingEmoji = () => {
    onClickEmoji(id)
  }

  return (
    <li className="list-item">
      <button className="emoji-button" type="button" onClick={byClickingEmoji}>
        <img src={emojiUrl} className="emoji" alt={emojiName} />
      </button>
    </li>
  )
}

export default emojiCard
