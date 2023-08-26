import React from "react";
import { Link } from 'react-router-dom';
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="midFooter">
        <h1>P-KART ONLINE STORE &#169;</h1>
        <h4>Design & Develop By "DARK EAGLE"</h4>
      </div>

      <div className="secondhalf">
      <div className="leftFooter"><Link to='/about'>About Us</Link></div>
      <div className="leftFooter"><Link to='/contact'>Contact Us</Link></div>
      <div className="leftFooteraa"><Link to='/tos'>Term of Service </Link></div>
      <div className="leftFooteraa"><Link to='/privacy'>Privacy Policy</Link></div>
      </div>
    </footer>
  );
};

export default Footer;
