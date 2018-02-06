import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm'
import WeatherListBox from './WeatherListBox'

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.onSubmitCommentForm = this.onSubmitCommentForm.bind(this);
    this.state = { boxes: [] };
  }
  onSubmitSearchForm(data) {
    this.setState(prevState => ({
      boxes: prevState.boxes.concat(data)
    }));
  };
  onSubmitCommentForm(data, boxIndex) {// go to db . then (()=> )
    this.setState(prevState => {
      return  {  boxes: prevState.boxes.map((box, i) => {
        if (i === boxIndex) {
          var newBox = {...box};
          newBox.comments = box.comments.concat(data);
          return newBox;
        }
        return box;
      })
    }
    })
  };
render() {
  return (
    <div className="container">
      <div className="page-header">
        <h2>Weather app</h2>
        <SearchForm onSubmitSearchForm={this.onSubmitSearchForm} />
      </div>
      <WeatherListBox boxes={this.state.boxes} onSubmitCommentForm={this.onSubmitCommentForm} />
    </div>
  );
}
}




export default App;
