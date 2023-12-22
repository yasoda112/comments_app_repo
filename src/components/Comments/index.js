import './index.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const initialCommentList = []

// Write your code here
class Comments extends Component {
  state = {name: '', comment: '', commentsList: initialCommentList, count: 0}

  onchangeName = event => {
    this.setState({name: event.target.value})
  }

  onchangeComment = event => {
    this.setState({comment: event.target.value})
  }

  onAddComment = event => {
    event.preventDefault()

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const {name, comment, count} = this.state
    const newComment = {
      id: uuidv4(),
      name,
      comment,
      initialClassName: initialBackgroundColorClassName,
      isLiked: false,
      date: new Date(),
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  onDeleteButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachItem => eachItem.id !== id),
    }))
  }

  isLikedButton = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  render() {
    const {name, comment, count, commentsList} = this.state
    return (
      <div className="bg-container">
        <div className="top-container">
          <div className="container">
            <h1 className="heading">Comments</h1>
            <p className="description">Say something about 4.O Technologies</p>
            <form className="text-container" onSubmit={this.onAddComment}>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.onchangeName}
                className="input"
              />
              <br />
              <textarea
                placeholder="Your Comment"
                className="textarea input"
                type="textarea"
                value={comment}
                onChange={this.onchangeComment}
              />
              <br />
              <button className="button" type="submit">
                Add Comment
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            className="top-img"
            alt="comments"
          />
        </div>
        <hr className="separator" />
        <div className="bottom-container">
          <div className="comment-container">
            <p className="count">{count}</p>
            <p className="comments">Comments</p>
          </div>
          <ul className="list-container">
            {commentsList.map(eachComment => (
              <CommentItem
                key={eachComment.id}
                details={eachComment}
                onDeleteButton={this.onDeleteButton}
                isLikedButton={this.isLikedButton}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
