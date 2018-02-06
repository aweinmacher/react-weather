import React from 'react';

class CommentBox extends React.Component {
    render() {
        return (
            <div>
                <p>
                    {this.props.item.visitor}: {this.props.item.text}
                    <span className="glyphicon glyphicon-trash pull-right"></span>
                </p>
            </div>
        )
    }
}

export default CommentBox;