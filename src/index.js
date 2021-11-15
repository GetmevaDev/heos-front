import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./global.css";
import App from "./App";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  // https://heos.herokuapp.com/
  // http://localhost:1337/
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
