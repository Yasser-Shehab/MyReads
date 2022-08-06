import React from "react";
import { Link } from "react-router-dom";

import notFound from "./assets/Images/404.jpg";
import "./NotFoundStyle.css";

const NotFound = () => {
  return (
    <Link to="/">
      <div className="notFoundImage-container">
        <img className="not-found-image" src={notFound} alt="PageNotFound" />
      </div>
    </Link>
  );
};

export default NotFound;
