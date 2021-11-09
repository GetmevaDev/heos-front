import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import ManhatonSalon from "./pages/ManhatonSalon";
import HamptonSalon from "./pages/HamptonSalon";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/contact/manhaton" component={ManhatonSalon} />
      <Route path="/contact/hampton" component={HamptonSalon} />
    </Switch>
  );
};
export default App;
