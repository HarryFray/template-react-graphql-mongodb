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
    console.log(this.props.data)
    if (this.props.data.loading) return (<div>loading</div>)
    return (
      <div className="test">
        <div>
          React GraphQL MongoDB template
          {this.props.data.company.name}
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


