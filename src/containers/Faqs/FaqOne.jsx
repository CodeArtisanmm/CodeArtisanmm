import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { ImageBoxTwo, SecSubTitle, SecTitle } from "../../components";

// FAQ Data
import faqData from "../../data/faq.json";
import { useTranslation } from "react-i18next";

const FaqOne = ({ className }) => {
  const { t } = useTranslation();
  return (
    <div className={`faq-wrap1 ${className || ""}`}>
      <div
        className="faq-shape1 background-image"
        style={{ backgroundImage: "url(images/bg/faq-bg-1-1.jpg)" }}
      ></div>
      <div
        className="faq-shape2 background-image"
        style={{ backgroundImage: "url(images/bg/faq-bg-1-2.jpg)" }}
      ></div>
      <div className="container">
        <div className="row gx-60">
          <div className="col-lg-6 pb-20 pb-lg-0">
            <ImageBoxTwo
              imageOne="images/faq/faq-1.jpg"
              imageTwo="images/faq/faq-2.jpg"
            />
          </div>
          <div className="col-lg-6 align-self-center">
            <SecSubTitle className="text-white">
              <i className="fas fa-bring-forward" />
              {t("home.faq.header")}
            </SecSubTitle>
            <SecTitle className="text-white mb-4 pb-2 h1">
              {t("home.faq.subheader")}
            </SecTitle>
            <Accordion defaultActiveKey="0" className="accordion-style1">
              {faqData.map((item, key) => (
                <Accordion.Item key={item.id} eventKey={key}>
                  <Accordion.Header>
                    {t(`home.faq.${item.questionId}.question`)}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p> {t(`home.faq.${item.questionId}.answer`)}</p>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqOne;
