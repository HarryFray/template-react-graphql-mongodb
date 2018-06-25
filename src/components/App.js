import React, { Component } from 'react';
import '../style/style.css';
import axios from 'axios';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class App extends Component {


  onClick = () => {
    axios.get('/api/rest')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render(props) {
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

const query = gql`
{
  company(id:"1"){
    name
  }
} 
`;

export default graphql(query)(App);


