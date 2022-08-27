import React from "react";
import MobileAppCSS from "./MobileApp.module.css";

function MobileApp() {
  return (
    <div className={MobileAppCSS.bg}>
      <ul>
        <li>
          <img src="img/product/Reservation.png" alt="reservation" />
          <div className={MobileAppCSS.text}>
            <h3>
              Make reservation for the dentist nearby through user’s dental
              status
            </h3>
          </div>
        </li>
        <li>
          <img src="img/product/Graph.png" alt="graph" />
          <div className={MobileAppCSS.text}>
            <h3>Easy and accurate result monitoring through graph</h3>
          </div>
        </li>
        <li>
          <img
            className={MobileAppCSS.small}
            src="img/product/RecordingSys.png"
            alt="recording"
          />
          <div className={MobileAppCSS.text}>
            <h3>Detailed recording system allows checking for each tooth</h3>
          </div>
        </li>
      </ul>
      <div className={MobileAppCSS.cropping}>
        <img
          className={MobileAppCSS.smartphone}
          src="img/product/smartphone.png"
          alt="smartphone"
        />
      </div>
    </div>
  );
}
export default MobileApp;
