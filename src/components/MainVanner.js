import React from "react";
import MainVannerCSS from "./MainVanner.module.css";
import { Link } from "react-router-dom";

function MainVanner() {
  return (
    <div className={MainVannerCSS.baseStart}>
      <img className={MainVannerCSS.back} src="img/MainBG.jpeg" alt="back" />
      <div className={MainVannerCSS.base}>
        <div className={MainVannerCSS.content}>
          <h3>TAKE CONTROL</h3>
          <div className={MainVannerCSS.line}></div>
          <div className={MainVannerCSS.text}>
            <h1>
              The smallest dentist <br /> in my house
            </h1>
            <div className={MainVannerCSS.subtitle}>
              Now take care of your teeth more scientifically.
            </div>
          </div>
        </div>
      </div>
      <Link
        to="/product"
        style={{
          textDecoration: "none",
          color: "#ffffff",
        }}
      >
        <div className={MainVannerCSS.btnBase}>
          <div className={MainVannerCSS.btn}></div>
          <div className={MainVannerCSS.link}>
            MORE
            <img src="img/arrow.png" alt="arrow" />
          </div>
        </div>
      </Link>
    </div>
  );
}
export default MainVanner;
