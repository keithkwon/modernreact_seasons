import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import "./index.css";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    console.log("My comp was rendered");

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ lat: position.coords.latitude });
      },
      (err) => {
        this.setState({ errorMessage: err.message });
        console.log(err);
      }
    );
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  render() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div> Error: {this.state.errorMessage} </div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return (
      <Spinner message="Please allow location. Your location is saved on your 'browser' in a special place called 'cache'. We will never know your private information!" />
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
