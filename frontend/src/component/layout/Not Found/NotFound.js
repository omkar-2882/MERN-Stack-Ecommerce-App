import React from "react";
// import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import notfound from "./notfound.jpg"
// import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="PageNotFound">
      <img src={notfound} alt="Page Not Found"></img>
      {/* <ErrorIcon />
      <Typography>Page Not Found </Typography> */}
      <Link to="/">Back To Home</Link>
    </div>
  );
};

export default NotFound;
