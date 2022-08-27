import React, { useState, useEffect } from "react";
import AboutUsCSS from "./AboutUs.module.css";
import NewHeader from "../components/NewHeader";
import Subtitle from "../components/Subtitle";
import Footer from "../components/Footer";
import NewTimeline from "../components/AboutUs/newTimeline";
import AboutSmartooth from "../components/AboutUs/AboutSmartooth";
// import NewMembers from "../components/AboutUs/NewMembers";
import NewMembersStatic from '../components/AboutUs/NewMembersStatic'

import Loader from '../components/Loader'

function AboutUs() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={AboutUsCSS.content}>
      <NewHeader />
      <br />
      {loading ? (
          <Loader/>
       ): (
        <div>
          <AboutSmartooth />
          <Subtitle text="Smartooth members" />
          <NewMembersStatic />
          <NewTimeline />
          <Footer />
        </div>
      )}
    </div>
  );
}
export default AboutUs;
