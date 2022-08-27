import React from "react";
import KickStarterCSS from "./KickStarter.module.css";
function KickStarter() {
  return (
    <div className={KickStarterCSS.Kickstarter}>
      <div className={KickStarterCSS.text}>
        <h1>We are now in</h1>
        <img src="img/KS.png" alt="KS" />
        <h3>
          {" "}
          Check the video for <br />
          more about SMARTOOTH
        </h3>
      </div>
      <div className={KickStarterCSS.videoWrap}>
        <iframe
          id="video"
          width="100%"
          height="82%"
          src="https://www.youtube-nocookie.com/embed/mKNvUJWCH74"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        ></iframe>
      </div>
    </div>
  );
}

export default KickStarter;
