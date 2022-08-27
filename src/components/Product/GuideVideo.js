import React from "react";
import GuideVideoCSS from "./GuideVideo.module.css";

function GuideVideo() {
  return (
    <div className={GuideVideoCSS.bg}>
      <div className={GuideVideoCSS.videoWrap}>
        <iframe
          width="100%"
          height="70%"
          src="https://www.youtube-nocookie.com/embed/AUttsuCcAzU"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
export default GuideVideo;
