import React, { Component } from "react";
import ReactDOM from "react-dom";

import Game from '../containers/Game';

class App extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        Live DraftX
      <Game />
      </div>
    );
  }
}
export default App;

// const wrapper = document.getElementById("root");
// wrapper ? ReactDOM.render(<App />, wrapper) : false;

