import React from "react";
import "./Spinner.css";

const Spinner = (props) => {
  return (
    <div className="spinner ui segment">
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
      <p></p>
    </div>
  );
};

Spinner.defaultProps = {
  message: "Loading",
};

export default Spinner;
