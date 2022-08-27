import React, {useState, useEffect} from "react";
import StepsCSS from "./Steps.module.css";

function Steps() {
  const [position,setPosition] = useState(window.scrollY)
  const [size, setSize] = useState({
    width: window.innerWidth,
})
useEffect(() => {
  const handleResize= () => {
      setSize({
          width: window.innerWidth,
      })
  }
  window.addEventListener("resize",handleResize)
  return () => window.removeEventListener("resize", handleResize)
}, [])

  function onScroll() {
    setPosition(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("scroll",onScroll)
    }
  }, [])
  const gap = (1890-size.width)/2
  return (
    <div className={StepsCSS.Steps}
    style= {{
      // marginTop:600-(size.width/1300)*270,
    }}>
      <div style ={{
        // transform: `translateX(${(100/position)^2}px`,
            transform: `translateX(${(position-2300)/5}px`,
            opacity:-((Math.abs(2200-gap-position) -360)/300)}}
            className={StepsCSS.Step1}>
        <div className={StepsCSS.Step1Base}></div>
        <div className={StepsCSS.Step1Content}>
          <img src="img/Step1.png" alt="Step1" />
          <div>STEP 1</div>
          {/* <div className={StepsCSS.lineVertical} /> */}
          <h1>Turn on the power</h1>
        </div>
      </div>
      <div style ={{
            transform: `translateX(${-(position-2600)/5}px`,
            opacity:-((Math.abs(3000-gap*2-position) -360)/300) }} 
            className={StepsCSS.Step2}
            // className={position > 2200 ? StepsCSS.Step2 : StepsCSS.hide}
            >
        <div className={StepsCSS.Step2Base}></div>
        <div className={StepsCSS.Step2Content}>
          <img src="img/Step2.png" alt="Step2" />
          <div>STEP 2</div>
          {/* <div className={StepsCSS.lineVertical} > </div> */}
          <h1>Make SMARTOOTH stick to your teeth</h1>
        </div>
      </div>
      <div style ={{
            transform: `translateX(${(position-3400)/5}px`,
            opacity:-((Math.abs(3800-gap*3-position) -360)/300) 
          }} 
      className={StepsCSS.Step3}>
        <div className={StepsCSS.Step3Base}></div>
        <div className={StepsCSS.Step3Content}>
          <img src="img/Step3.png" alt="Step3" />
          <div>STEP 3</div>
          <h1>Record cavity status in mobile app</h1>
        </div>
      </div>
      <h2 className={StepsCSS.done} style = {{
        opacity:((position-size.width)*2-4400)/600
      }}>Done.</h2>
    </div>
  );
}
export default Steps;
