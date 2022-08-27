import ExplanationCSS from "./Explanation.module.css";
import React from "react";

function Explanation() {
  return (
    <div className={ExplanationCSS.base}>
      <img
        className={ExplanationCSS.device}
        src="img/product/Device.png"
        alt="device"
      />
      <ul>
        <li>
          <img src="img/product/Accurate.png" alt="accurateIcon" />
          <div className={ExplanationCSS.text}>
            <h1>Accurate diagnosis</h1>
            <h3>
              High-performance optical sensor not only decays but also
              determines the severity
            </h3>
          </div>
        </li>
        <li>
          <img src="img/product/MobileApp.png" alt="mobileAppIcon" />
          <div className={ExplanationCSS.text}>
            <h1>Mobile app</h1>
            <h3>
              You can monitor the measurement results and make a dental
              appointment in a single process
            </h3>
          </div>
        </li>
        <li>
          <img src="img/product/EasyAndFast.png" alt="easyAndFastIcon" />
          <div className={ExplanationCSS.text}>
            <h1>Easy {"&"} Fast</h1>
            <h3>
              User-friendly design allows measurement to be performed only by a
              single button-click
            </h3>
          </div>
        </li>
        <li>
          <img src="img/product/Hygenic.png" alt="hygenicIcon" />
          <div className={ExplanationCSS.text}>
            <h1>Hygenic</h1>
            <h3>
              Always use without any hygiene issues through disposable sensor
            </h3>
          </div>
        </li>
      </ul>
    </div>
  );
}
export default Explanation;
