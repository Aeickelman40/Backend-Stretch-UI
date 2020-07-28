import React from 'react';

const Comment = (props) => {
  return (
    <section className='Comment'>
        <p>Author: {props.author}</p>
        <p>Comment: {props.comment}</p>
        <p>Date: {props.date}</p>
    </section>
  );
}
export default Comment;
