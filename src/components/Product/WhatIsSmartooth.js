import React from "react";
import WhatIsSmartoothCSS from "./WhatIsSmartooth.module.css";

function WhatIsSmartooth() {
  return (
    <div className={WhatIsSmartoothCSS.content}>
      <img
        className={WhatIsSmartoothCSS.back}
        src="img/Vanner2BG.jpg"
        alt="Vanner2BG"
      />
      <div className={WhatIsSmartoothCSS.text}>
        <h1 className={WhatIsSmartoothCSS.title}> What is Smartooth?</h1>
        <div className={WhatIsSmartoothCSS.line}></div>
        <h3>
          The world's first dental healthcare device for families, is designed
          to be small, portable, and easy to use for men and women of all ages.
        </h3>
      </div>
    </div>
  );
}
export default WhatIsSmartooth;
