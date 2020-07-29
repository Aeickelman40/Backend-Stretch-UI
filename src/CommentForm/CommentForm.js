import React, { Component } from 'react';
import Comment from './Comment';
import { getComments } from '../ApiCalls'
import './CommentForm.css'

class CommentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      main_text: "",
      author: "",
    }
  };

  componentDidMount = async () => {
    // fetch Comments
    // write api to only get comments for 1 specific shoe
    const response = await getComments(this.props.shoeId)
    this.props.addComment(...response)
    return response;
  }

  handleChange = (event) => {
    this.setState( { [event.target.name]: event.target.value} );
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const newComment = {
      shoeId: this.props.id,
      author: this.state.author,
      main_text: this.state.main_text,
    }
    this.props.comments.push(newComment)

    const response = await this.props.postNewComment(newComment.shoeId,newComment.author, newComment.main_text)
    this.props.addComment(...this.props.comments)
  }

  render() {
    const comments = this.props.comments.map((comment) => {
        return (
          <Comment
            author={comment.author}
            comment={comment.main_text}
            date={comment.created_at}
          />
        )
      })

    return (
      <section className="comment-section">
          <form className="comment-form">
            <input
                className="name-input input"
                placeholder="Name"
                name="author"
                value={this.state.name}
                onChange={this.handleChange}
            ></input>
            <input
            className="comment-input input"
              name="newComment"
              placeholder="Comment"
              type="text"
              value={this.state.newComment}
              onChange={this.handleChange}
            ></input>
            <button
              className="submitButton commentButton"
              type="submit"
              onClick={ this.handleSubmit }
            >Submit Comment</button>

          </form>
          <h1>Comments</h1>
        <section className="comments-display">{comments}</section>
      </section>
        
    )
  }
}
export default CommentForm;