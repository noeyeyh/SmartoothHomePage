import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Product from "./routes/Product";
import AboutUs from "./routes/AboutUs";
// import {Helmet} from './react-helmet'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="about_us" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
