import React from 'react';
import { Link } from "react-router-dom";

const Logo = ({ image, className }) => (
  <Link className={`vs-logo ${className || ''}`} to="/">
    <img src={image = "/images/main-logo-1.png"} alt="Logo" style={{ width: `100px` }} />
  </Link>
);

export default Logo;
