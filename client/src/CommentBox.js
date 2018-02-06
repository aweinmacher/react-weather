import React from 'react';

class CommentBox extends React.Component {
    render() {
    return (
       <div>
           <p>{this.props.item.visitor}: {this.props.item.text}</p>
      </div>
    )
  }
}

export default CommentBox;