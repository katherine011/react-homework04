import React from "react";
import "./Line1Src.css";
import Wheat from "../wheat/Wheat";
import Wfire from "../Wfire/Wfire";
import Wleaf from "../Wleaf/Wleaf";

const Line1Src = (props) => {
  console.log(props.wheat);
  console.log(props.fire);
  console.log(props.leaf);
  return (
    <div className="Line1Src">
      {props.wheat && <Wheat wheat={props.wheat} />}
      {props.fire && <Wfire fire={props.fire} />}
      {props.leaf && <Wleaf leaf={props.leaf} />}
    </div>
  );
};

export default Line1Src;
