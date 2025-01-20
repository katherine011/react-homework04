import React from "react";
import "./Wleaf.css";

const Wleaf = (props) => {
  return (
    <div className="Round leaf">
      <img src={props.leaf} alt="" />
    </div>
  );
};

export default Wleaf;
