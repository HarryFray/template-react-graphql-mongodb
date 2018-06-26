import React, { Component } from 'react';
import '../style/style.css';

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
    if (this.props.data.loading) return (<div>loading</div>)
    return (
      <div>
        <div>
          React GraphQL MongoDB template
          {this.props.data.employees[0].name}
        </div>
        <button onClick={this.onClick.bind(this)} >Test Route</button>
      </div>
    );
  }
}

const query = gql`
{
  employees{
    name
  }
} 
`;

export default graphql(query)(App);


