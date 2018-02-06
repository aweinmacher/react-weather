import React, { Component } from 'react';
import './App.css';
import SearchForm from './SearchForm'
import WeatherListBox from './WeatherListBox'

class App extends Component {
  constructor(props) {
    super(props);
    this.onSubmitSearchForm = this.onSubmitSearchForm.bind(this);
    this.state = {boxes: []};
  }
  
  onSubmitSearchForm(data) { 
    this.setState(prevState => ({
      boxes: prevState
        .boxes
        .concat(data)
    }));
  };
  render() {
    return (
      <div>
        <div className="page-header">
          <h2>Weather app</h2>
          <SearchForm onSubmitSearchForm={this.onSubmitSearchForm}/>
        </div>
        <WeatherListBox boxes={this.state.boxes}/>
      </div>
    );
  }
}




export default App;
