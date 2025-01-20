import React from "react";
import "./HeaderSrc.css";

const HeaderSrc = (props) => {
  return (
    <div className="HeaderSrc">
      <img src={props.src} />
      <div className="Info">
        <img src="src/assets/icons/info.png" alt="" />
      </div>
    </div>
  );
};

export default HeaderSrc;
