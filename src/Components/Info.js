import React from "react";
import Logo from "../Icons/my-pic.jpg";
import '../CSS/Info.css'
export default function Info() {
  return (
    <>
        <img src={Logo} alt="" width="317" height="317" className="info-img"/>

      <h1 className="infoh1">Kartavya Sharma</h1>
      <h2 className="infoh2">Learning React</h2>
      <h3 className="infoh3">kartavyasharma.code.in</h3>
      <button type="button" className="info-butt1">
        Email
      </button>
      <button type="button" className="info-butt2">
        LinkedIn
      </button>
    </>
  );
}
