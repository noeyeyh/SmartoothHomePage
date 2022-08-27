import React from "react";
import FooterCSS from "./Footer.module.css";

function Footer() {
  return (
    <div className={FooterCSS.bg}>
      <div className={FooterCSS.base}>
        <h2>Contact us</h2>
        <div className={FooterCSS.line}></div>
        <div className={FooterCSS.content}>
          <ul className={FooterCSS.text}>
            <li>
              <h1>Address</h1>
              <h3>
                509 Space Salim, 10 Noryagjin-ro, Dongjak-gu, Seoul, Republic of
                Korea
              </h3>{" "}
            </li>
            <li>
              <h1>Tel</h1>
              <h3>02 - 518 - 2842</h3>
            </li>
            <li>
              <h1>Email</h1>
              <h3>smartooth@smartooth.co</h3>
            </li>
            <li>
              <h1>Mobile</h1>
              <h3>010 - 8737 - 9558</h3>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
