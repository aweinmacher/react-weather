import React from 'react';
import axios from 'axios';
import './App.css';
import SearchForm from './SearchForm'
import WeatherListBox from './WeatherListBox'

class App extends React.Component {
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

componentDidMount() {
  var url = `http://localhost:3000/data`
    axios.get(url)
        .then(response => {
            console.log(response.data);
            this.setState({boxes: response.data});
        })
        .catch(error => {
            console.log('Error fetching and parsing data', error);
        });
}
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
