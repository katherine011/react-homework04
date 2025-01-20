import React from "react";
import "./Wheat.css";

const Wheat = (props) => {
  return (
    <div className="Round wheat">
      <img src={props.wheat} alt="" />
    </div>
  );
};

export default Wheat;
