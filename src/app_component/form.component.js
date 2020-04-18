import React from "react";
const Form = props => {
  return (
    <div className="container">
      <div>{props.error ? error() : null}</div>
      <form onSubmit={props.loadWeather}>
        <div className="row">
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              name="city"
              autoComplete="off"
              placeholder="Enter City"
            />
          </div>
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              name="country"
              autoComplete="off"
              placeholder="Enter country"
            />
          </div>
          <div className="col-sm-4">
            <button className="btn btn-warning">Get Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

function error() {
  return (
    <div className="alert alert-danger">Please enter city and country</div>
  );
}

export default Form;
