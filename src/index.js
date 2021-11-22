import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './global.css';
import App from './App';

const client = new ApolloClient({
  uri: 'https://heos.herokuapp.com/graphql',
  // https://heos.herokuapp.com/
  // http://localhost:1337/
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
);
