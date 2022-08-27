import React from "react";
import StepsCSS from "./Steps.module.css";

function Steps() {
  return (
    <div
      className={StepsCSS.Steps}
    >
      <div
        className={StepsCSS.Step1}
      >
        <div className={StepsCSS.Step1Base}></div>
        <div className={StepsCSS.Step1Content}>
          <img src="img/Step1.png" alt="Step1" />
          <div>STEP 1</div>
          <h1>Turn on the power</h1>
        </div>
      </div>
      <div
        className={StepsCSS.Step2}
      >
        <div className={StepsCSS.Step2Base}></div>
        <div className={StepsCSS.Step2Content}>
          <img src="img/Step2.png" alt="Step2" />
          <div>STEP 2</div>
          <h1>Make SMARTOOTH stick to your teeth</h1>
        </div>
      </div>
      <div
        className={StepsCSS.Step3}
      >
        <div className={StepsCSS.Step3Base}></div>
        <div className={StepsCSS.Step3Content}>
          <img src="img/Step3.png" alt="Step3" />
          <div>STEP 3</div>
          <h1>Record cavity status in mobile app</h1>
        </div>
      </div>
      <h2
        className={StepsCSS.done}
      >
        Done.
      </h2>
    </div>
  );
}
export default Steps;
