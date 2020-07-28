import React, { Component } from 'react';
import Comment from './Comment';
import { getComments } from '../ApiCalls'



class CommentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLoaded: false,
      newComment: "",
      author: "",
    }
  };

  componentDidMount = async () => {
    console.log(this.props);
    // fetch Comments
    // write api to only get comments for 1 specific shoe
    const response = await getComments(this.props.shoeId)
    this.props.addComment(...response)
    return response;

   // this.setState(this.state, {newComment: 'what upppppp'})
  }

  handleChange = (event) => {
    this.setState( { [event.target.name]: event.target.value} );
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const newComment = {
      shoeId: this.props.id,
      author: this.state.author,
      comment: this.state.newComment,
      // date: Date.now(),
    }
    this.props.comments.push(newComment)
    console.log(newComment)

    const response = await this.props.postNewComment(newComment.shoeId,newComment.author, newComment.comment)
    this.props.addComment(...this.props.comments)
  }
  // renderComments = (comments) => {
  //   comments = this.props.comments.map((comment) => {
  //     return (
  //       <Comment
  //         author={comment.author}
  //         comment={comment.comment}
  //         date={comment.date}
  //       />
  //     )
  //   })
  // }

  

  render() {
    const comments = this.props.comments.map((comment) => {
        return (
          <Comment
            author={comment.author}
            comment={comment.comment}
            date={comment.date}
          />
        )
      })

    return (
      <section className="comment-section">
        <h1>Comments</h1>
        <section className="comments-display">{comments}</section>
       {
          // display comments for this shoe
          // create comment component with author, date, comment
          // map through array of comment objs, render them to page
          // what to do if no comments


        // display form to add new comments
       }

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
              type="text"
              value={this.state.newComment}
              onChange={this.handleChange}
            ></input>
            <button
              className="submit-button"
              type="submit"
              onClick={ this.handleSubmit }
            ></button>

          </form>
          {// submit form posts comment to api
          }
      </section>
        
    )
  }


}
export default CommentForm;