import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import ClipLoader from "react-spinners/HashLoader";
import { css } from "@emotion/react";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import ManhatonSalon from "./pages/ManhatonSalon";
// import HamptonSalon from "./pages/HamptonSalon";
// import NotFound from "./pages/404";

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

  const renderLoader = () => (
    <p>
      <ClipLoader css={override} size={120} />
    </p>
  );
  return (
    <Switch>
      <Suspense fallback={renderLoader()}>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact/manhaton" component={ManhatonSalon} />
        <Route path="/contact/hampton" component={HamptonSalon} />
        <Route component={NotFound} />
      </Suspense>
    </Switch>
  );
};
export default App;
