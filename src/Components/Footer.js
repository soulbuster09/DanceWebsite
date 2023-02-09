import React from "react";
import icon1 from "../Icons/github.png";
import icon2 from "../Icons/insta.webp";
import icon3 from "../Icons/twitter.png";
import icon4 from "../Icons/fb.webp";
export default function Footer() {
  return (
    <>
      <h2 className="footerh2">Footer goes here</h2>
      <div className="foot-icons">
        <img src={icon1} alt="1" width="25" height="25" />
        <img src={icon2} alt="2" width="25" height="25" />
        <img src={icon3} alt="3" width="25" height="25" />
        <img src={icon4} alt="4" width="25" height="25" />
      </div>
    </>
  );
}
