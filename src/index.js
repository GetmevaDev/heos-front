import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import App from "./App";

const client = new ApolloClient({
  uri: "https://cms-edditsalon.herokuapp.com/graphql",
  // uri: "http://localhost:1337/graphql",

  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <App />
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);
