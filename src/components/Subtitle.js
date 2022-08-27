import React from "react";
import SubtitleCSS from "./Subtitle.module.css";

function Subtitle({ text }) {
  return (
    <div className={SubtitleCSS.Subtitle}>
      <h1>
        <br />
      </h1>
      <h3>{text}</h3>
      <div className={SubtitleCSS.line}></div>
    </div>
  );
}
export default Subtitle;
