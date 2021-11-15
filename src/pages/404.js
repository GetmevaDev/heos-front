import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <div class="msg">
        Page not found
        <p>
          Let's go <Link to="/">home</Link> and try from there.
        </p>
      </div>
    </>
  );
};

export default PageNotFound;
