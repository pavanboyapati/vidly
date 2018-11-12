import React, { Component } from "react";
import NavBar from "./navbar";
import VidlyRoutes from "./components/vidlyRoutes";

import "./App.css";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <VidlyRoutes />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
