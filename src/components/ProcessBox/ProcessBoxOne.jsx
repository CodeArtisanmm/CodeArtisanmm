import React from "react";
import { useTranslation } from "react-i18next";

const ProcessBoxOne = ({ className, arrow, icon, number, name, text }) => {
  const { t } = useTranslation();
  return (
    <div className={`vs-process ${className || ""}`}>
      <div className="process-arrow">
        <img src={arrow} alt="arrow" />
      </div>
      <div className="process-icon">
        <img src={icon} alt="icon" />
        <span className="process-number">{number}</span>
      </div>
      <h3 className="process-title h5"> {t(`home.process.${name}.title`)} </h3>
      <p className="process-text">{t(`home.process.${name}.description`)}</p>
    </div>
  );
};

export default ProcessBoxOne;
