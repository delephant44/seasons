import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loading from "./Loading";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      errorMessage: ""
    };

    //find current location
  }
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude
          //this is from the console object ^^^
        });
      },
      error => {
        this.setState({
          errorMessage: error.message
          //this is from the console object when user doesn't allow geolocation^^^
        });
      }
    );
  }

  logic() {
    if (this.state.errorMessage && !this.state.latitude) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.latitude) {
      return (
        <div>
          Your latitude is: {this.state.latitude}
          <SeasonDisplay latitude={this.state.latitude} />
        </div>
      );
    }

    return <Loading message="Please accept location request" />;
  }

  render() {
    return <div>{this.logic()}</div>;
  }
}

export default App;
