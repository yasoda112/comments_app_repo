// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {details, isLikedButton, onDeleteButton} = props
  const {id, name, comment, date, isLiked, initialClassName} = details

  const nameIcon = name[0]
  const updatedDate = formatDistanceToNow(date())

  const likeUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likeTextClassName = isLiked ? 'liked' : 'like'

  const toggleLikeButton = () => {
    isLikedButton(id)
  }

  const onDeleting = () => {
    onDeleteButton(id)
  }

  return (
    <li className="list-item">
      <div className="user-container">
        <p className={initialClassName}>{nameIcon}</p>
        <div>
          <h1 className="name">
            {name}
            <span className="span">{updatedDate}</span>
          </h1>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="like-delete-container">
        <div className="like-container">
          <button onClick={toggleLikeButton} type="button">
            <img src={likeUrl} className="like-image" alt="like" />
          </button>
          <p className={likeTextClassName}>Like</p>
        </div>
        <button onClick={onDeleting} type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
