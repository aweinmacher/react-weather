var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/data', function (req, res) {
  res.send([
      {
        name: "Hod Hasharon",
        country: "Israel",
        icon: "http://cdn.apixu.com/weather/64x64/day/116.png",
        feelslike_c: "20",
        text: "Partly cloudy",
        comments: [
          {visitor: 'Anna', text: 'Nice weather!'},
          {visitor: 'Olga', text: 'Oh, no!!!'}
        ]
      },
      {
        name: "New York",
        country: "USA",
        icon: "http://cdn.apixu.com/weather/64x64/day/308.png",
        feelslike_c: "-1",
        text: "Heavy rain",
        comments: []
      },
      {
        name: "Paris",
        country: "France",
        icon: "http://cdn.apixu.com/weather/64x64/day/113.png",
        feelslike_c: "5",
        text: "Sunny",
        comments: []
      }
    ]
  );
})




app.listen('3001', function () {
  console.log("what do you want from me! get me on 3001 ;-)");
});