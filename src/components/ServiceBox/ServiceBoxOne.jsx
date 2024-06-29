import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServiceBoxOne = ({ bgImage, icon, title, text, path, className, id }) => {
  const { t } = useTranslation();
  return (
    <div className={`service-style1 ${className || ""}`}>
      <div
        className="service-bg background-image"
        style={{ backgroundImage: "url(" + bgImage + ")" }}
      ></div>
      <div className="service-icon">
        <img src={icon} alt="serviceicon" />
      </div>
      <h3 className="service-title h5">
        <Link to={path}>{t(`home.service.${title}.title`)}</Link>
      </h3>
      <p className="service-text">
        {t(`home.service.${title}.description`).substr(0, 100)}...
      </p>
      <Link to={path} className="style3">
        Read More
        <i className="far fa-long-arrow-right" />
      </Link>
    </div>
  );
};

export default ServiceBoxOne;
