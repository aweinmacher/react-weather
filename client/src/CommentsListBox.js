import React from 'react';
import CommentBox from './CommentBox';

const CommentsListBox = (props) => {
    const comments = props.comments.map((item, index) => <CommentBox key={index} index={index} item={item}/>)
    return (
      <div>
        {comments}
      </div>
    );
  };


export default CommentsListBox;