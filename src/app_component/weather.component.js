import React from "react";

const Weather = props => {
  return (
    <div className="container">
      <div className="cards">
        <h1>
          {/* {props.city}, {props.country} */}
          {props.city}
        </h1>
        <h5 className="py-4">
          <i className={`fas ${props.weatherIcon} fa-4x`}></i>
        </h5>
        {props.temp_celsius ? (
          <h1 className="py-2">{props.temp_celsius}&deg;</h1>
        ) : null}
        {/* show max min temp */}
        {minmaxTemp(props.temp_min, props.temp_max)}
        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
};

function minmaxTemp(min, max) {
  if (min && max) {
    return (
      <h3>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h3>
    );
  }
}

export default Weather;
