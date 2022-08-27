import React from "react";
import CradleCSS from "./Cradle.module.css";

function Cradle() {
  return (
    <div className={CradleCSS.content}>
      <div className={CradleCSS.first}>
        <img src="img/product/Mirror.png" alt="mirror" />
        <h1>Easy measurement through built-in mirror</h1>
      </div>
      <div className={CradleCSS.second}>
        <h1>Keep it comfortable regardless of location</h1>
        <img src="img/product/portable.png" alt="portable" />
      </div>
    </div>
  );
}

export default Cradle;
