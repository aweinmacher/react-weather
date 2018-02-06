import React from 'react';
import CommentForm from './CommentForm';
import CommentsListBox from './CommentsListBox';

class WeatherBox extends React.Component { 
  constructor(props) {
    super(props);
    this.removeBox = this.removeBox.bind(this);
    this.onSubmitCommentForm = this.onSubmitCommentForm.bind(this);
  }
  removeBox() {
    this.props.removeBox(this.props.boxIndex);
  } 
  onSubmitCommentForm (data) {
    this.props.onSubmitCommentForm(data, this.props.boxIndex);
  }
  render() {
    return (
       <div className="col-md-4 col-sm-6">
        <div>
          <span className="glyphicon glyphicon-trash pull-right" onClick={this.removeBox}></span>
          <div className="media-left">
            <img src={this.props.item.icon} alt={this.props.item.name} className="media-object" style={{ width: 60}}/></div>
          <div className="media-body">
            <h4 className="media-heading">{this.props.item.name}, {this.props.item.country}</h4>
            <p>{this.props.item.text} {this.props.item.feelslike_c} &#8451;</p>
          </div>
        </div>
        <CommentForm onSubmitCommentForm={this.onSubmitCommentForm}/>
        <CommentsListBox comments={this.props.item.comments}/>
        <hr/>
      </div>
    )
  }
}

export default WeatherBox;