import AboutSmartoothCSS from "./AboutSmartooth.module.css";
import React from "react";

function AboutSmartooth() {
  return (
    <div className={AboutSmartoothCSS.base}
    >
        <img
          className={AboutSmartoothCSS.main}
          src="img/aboutus/sketches.png"
          alt="bg"
        />
      <div className={AboutSmartoothCSS.content}>
        <div className={AboutSmartoothCSS.title}>
          <img
            className={AboutSmartoothCSS.icon}
            src="img/aboutus/logo_white.png"
            alt="logo"
          />
          <h1>About Us</h1>
        </div>
        <div className={AboutSmartoothCSS.line} />
        <div className={AboutSmartoothCSS.text}>
          <h3>
            Founded in 2019, Smartooth has grown into a company with all the
            necessary capabilities to produce finished products, from securing
            design, core technology, app development, and working wood
            manufacturing, with the help of various companies and investors such
            as 'Touch of Modern' and 'NEST'.
          </h3>
          <div className={AboutSmartoothCSS.gap}></div>
          <h3>
            We can currently mass-produce 3,000 smartooth devices every month,
            and our goal is to mass-produce about 15,000 devices every year.
          </h3>
        </div>
      </div>
    </div>
  );
}

export default AboutSmartooth;
