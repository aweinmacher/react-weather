import React, { Component } from 'react';
import axios from 'axios'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { city: "" }
    }
    handleSubmit(event) {
        event.preventDefault();//<== will prevent the original code from taking place (Submit/CLick etc)
        let structure = {}; // dummy data
        if (this.state.city === "a") {
            structure = {
                name: "Hod Hasharon",
                icon: "http://cdn.apixu.com/weather/64x64/day/116.png",
                feelslike_c: "20",
                text: "Partly cloudy",
                comments: []
            };
        } else if (this.state.city === "b") {
            structure = {
                name: "New York",
                icon: "http://cdn.apixu.com/weather/64x64/day/308.png",
                feelslike_c: "-1",
                text: "Heavy rain",
                comments: []
            };
        } else {
            structure = {
                name: "Paris",
                icon: "http://cdn.apixu.com/weather/64x64/day/113.png",
                feelslike_c: "5",
                text: "Sunny",
                comments: []
            };
        }
        this.props.onSubmitSearchForm(structure);
        this.setState({ city: '' });
        
        // var url = `http://api.apixu.com/v1/current.json?key=250d2778fb1f4ec2914142850180502&q=${this.state.city}`
        // axios.get(url)
        //     .then(response => {
        //         console.log(response);
        //         var structure = {
        //             name: response.data.location.name,
        //             icon: response.data.current.condition.icon,
        //             feelslike_c: response.data.current.feelslike_c,
        //             text: response.data.current.condition.text,
        //             comments: []
        //         };
        //         this.props.onSubmitSearchForm(structure);
        //         this.setState({ city: '' });
        //     })
        //     .catch(error => {
        //         console.log('Error fetching and parsing data', error);
        //     });
    }
    render() {
        return (
            <form action="#" id="getWeatherForm" onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control"
                        id="city"
                        placeholder="Enter city"
                        required
                        value={this.state.city}
                        onChange={(event) => this.setState({ city: event.target.value })} />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="submit">Go!</button>
                    </span>
                </div>
            </form>
        )
    }
}

export default SearchForm;