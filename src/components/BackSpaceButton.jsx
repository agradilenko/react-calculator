import React from "react";
import "./BackSpaceButton.css";

export const BackSpaceButton = (props) => (
  <div className="back-space-btn" onClick={props.handleClick}>
    {props.children}
  </div>
)