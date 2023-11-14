import React from 'react';
import { Link } from "react-router-dom";

const Logo = ({ image, className }) => (
  <Link className={`vs-logo ${className || ''}`} to="/">
    {/* <img src={image} alt="Logo" /> */}
    <h2>CodeArtisan</h2>
  </Link>
);

export default Logo;
