import NewHeader from "../components/NewHeader";
import ProductCSS from "./Product.module.css";
import Subtitle from "../components/Subtitle";
import WhatIsSmartooth from "../components/Product/WhatIsSmartooth";
import Explanation from "../components/Product/Explanation";
import GuideVideo from "../components/Product/GuideVideo";
import Cradle from "../components/Product/Cradle";
import Footer from "../components/Footer";
import Loader from '../components/Loader'
import React,{useState,useEffect} from 'react'

function Product() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div className={ProductCSS.content}>
      <NewHeader />
      <br />
      {loading? <Loader/> : 
      <div>
      <WhatIsSmartooth />
      <Explanation />
      <Subtitle text="How to use Smartooth?" />
      <GuideVideo />
      <Subtitle text="Cradle" />
      <Cradle />
      <Footer />
      </div>}
      
    </div>
  );
}
export default Product;
