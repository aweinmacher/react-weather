import React from 'react';
import WeatherBox from './WeatherBox';

const WeatherListBox = (props) => {
    const boxes = props.boxes.map((item, index) => <WeatherBox 
                                                      key={index} 
                                                      item={item} 
                                                      boxIndex={index} 
                                                      onSubmitCommentForm={props.onSubmitCommentForm}/>)
    return (
      <div>
        {boxes}
      </div>
    );
  };

export default WeatherListBox;