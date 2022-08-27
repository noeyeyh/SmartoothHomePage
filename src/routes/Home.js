import NewHeader from "../components/NewHeader";
import KickStarter from "../components/KickStarter";
import MainVanner from "../components/MainVanner";
import Subtitle from "../components/Subtitle";
// import Steps from "../components/Steps";
import StepStatic from '../components/StepsStatic'
import Footer from "../components/Footer";
import HomeCSS from "./Home.module.css";
import MobileApp from "../components/Product/MobileApp";
import Loader from "../components/Loader";
import React, {useState, useEffect} from 'react'

function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div className={HomeCSS.base}>
      <div className={HomeCSS.ref}>
        {/* <img src="img/Home.png" alt="ex" /> */}
      </div>
      <div>
        <NewHeader />
        {loading? <Loader/> : 
        <div>
        <div className={HomeCSS.content}>
          <MainVanner />
          <KickStarter />
          <Subtitle text="It really is this simple" />
          <StepStatic />
          <Subtitle text="Mobile application" />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <MobileApp />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </div>
      }
        
    </div>
    </div>
  );
}
export default Home;
