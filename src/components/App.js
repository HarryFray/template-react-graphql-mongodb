import React, { Component } from 'react';
import '../style/style.css';
import axios from 'axios';

export default class App extends Component {

  onClick = () => {
    axios.get('http://localhost:3000/')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="test">
        <div>
          React GraphQL MongoDB template
      </div>
        <button onClick={this.onClick.bind(this)} >Test Route</button>
      </div>
    );
  }
}


