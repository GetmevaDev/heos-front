import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const ManhatonSalon = lazy(() => import("./pages/ManhatonSalon"));
const HamptonSalon = lazy(() => import("./pages/HamptonSalon"));
const NotFound = lazy(() => import("./pages/404"));

const App = () => {
  const override = css`
    display: block;
    margin: 0 auto;
    top: 300px;
    border-color: red;
  `;

  return (
    <Switch>
      <Suspense
        fallback={
          <h1>
            <ClipLoader css={override} size={120} />
          </h1>
        }
      >
        <HelmetProvider>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact/manhaton" component={ManhatonSalon} />
          <Route path="/contact/hampton" component={HamptonSalon} />
        </HelmetProvider>
      </Suspense>
      <Route path="" component={NotFound} />
    </Switch>
  );
};
export default App;
