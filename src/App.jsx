import React, { Component } from "react";
import NavBar from "./NavBar";
import Body from "./Body";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Body />
      </React.Fragment>
    );
  }
}

