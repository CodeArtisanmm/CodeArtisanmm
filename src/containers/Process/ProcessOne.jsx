import React from "react";
import {
  TitleWrap,
  SecSubTitle,
  SecTitle,
  ProcessBoxOne,
} from "../../components";

// Process Data
import processData from "../../data/process.json";
import { useTranslation } from "react-i18next";

const ProcessOne = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div
      className={`background-image ${className || ""}`}
      style={{ backgroundImage: "url(images/bg/process-bg-1-1.jpg)" }}
    >
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-xl-6">
            <TitleWrap>
              <SecSubTitle> {t("home.process.header")} </SecSubTitle>
              <SecTitle className="h1">{t("home.process.subheader")}</SecTitle>
            </TitleWrap>
          </div>
        </div>
        <div className="row">
          {processData.map((item) => (
            <ProcessBoxOne
              key={item.number}
              className="col-sm-6 col-lg-3 process-style1"
              arrow={item.arrow}
              name={item.name}
              text={item.text}
              icon={item.icon}
              number={item.number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessOne;
