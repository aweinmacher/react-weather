import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { visitor: "", text: "" }
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmitCommentForm(this.state);
        this.setState({ visitor: "", text: "" });
    }
    render() {
        return (
            <form action="#" id="getCommentForm" onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    className="form-control"
                    id="visitor"
                    placeholder="Visitor"
                    required
                    value={this.state.visitor}
                    onChange={(event) => this.setState({ visitor: event.target.value })} />
                <input
                    type="text"
                    className="form-control"
                    id="text"
                    placeholder="Enter comment"
                    required
                    value={this.state.text}
                    onChange={(event) => this.setState({ text: event.target.value })} />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>
        )
    }
}





export default CommentForm;