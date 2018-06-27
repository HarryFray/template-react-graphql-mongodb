/* eslint-env browser */
import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import App from './components/App';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'


const client = new ApolloClient({
  uri: 'http://localhost:4000/api/graphql',
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App} />
      </Switch>
    </BrowserRouter>
  </ApolloProvider>

  , document.getElementById('root')
);

