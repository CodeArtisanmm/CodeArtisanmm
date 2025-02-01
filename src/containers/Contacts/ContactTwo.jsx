import React from "react";
import Tab from "react-bootstrap/Tab";
import { InfoMedia, FormFive } from "../../components";
import { useTranslation } from "react-i18next";

const ContactTwo = ({ ...restProps }) => {
  const { t } = useTranslation();
  return (
    <div {...restProps}>
      <div className="container">
        <Tab.Container id="contactTab" defaultActiveKey="tabno1">
          <Tab.Content>
            <Tab.Pane eventKey="tabno1">
              <div className="row">
                <div className="col-lg-6 mb-30">
                  <div className="contact-box">
                    <h3 className="contact-box__title h4">
                      {t("contact.office_address")}
                    </h3>
                    <p className="contact-box__text"> {t("contact.online")} </p>
                    <InfoMedia
                      icon="fal fa-phone-alt"
                      title="Phone Number & Email"
                      info={
                        <>
                          <a href="tel:+9448044702">+(959) 09448044702</a>
                          <a href="mailto:info@codeartisanmyanmar.com">
                            info@codeartisanmyanmar.com
                          </a>
                        </>
                      }
                    />
                    <InfoMedia
                      icon="far fa-map-marker-alt"
                      title={t("contact.our_office_address")}
                      info={t("contact.online")}
                    />
                    <InfoMedia
                      icon="far fa-clock"
                      title={t("contact.official_work_time")}
                      info="7:00am - 6:00pm (Everyday)"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-30">
                  <div className="contact-box">
                    <h3 className="contact-box__title h4">
                      {t("contact.leave_message")}
                    </h3>
                    <p className="contact-box__text">
                      {t("contact.ready_to_help_you")}
                    </p>
                    <FormFive />
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="tabno2">
              <div className="row">
                <div className="col-lg-6 mb-30">
                  <div className="contact-box">
                    <h3 className="contact-box__title h4">
                      Australia Office Address
                    </h3>
                    <p className="contact-box__text">
                      Completely recaptiualize 24/7 communities via standards
                      compliant metrics whereas web-enabled content
                    </p>
                    <InfoMedia
                      icon="fal fa-phone-alt"
                      title="Phone Number & Email"
                      info={
                        <>
                          <a href="tel:+310259121563">+(310) 2591 21563</a>
                          <a href="mailto:info@example.com">info@example.com</a>
                        </>
                      }
                    />
                    <InfoMedia
                      icon="far fa-map-marker-alt"
                      title="Our Office Address"
                      info="258 Dancing Street, Miland Line, HUYI 21563, Canberra"
                    />
                    <InfoMedia
                      icon="far fa-clock"
                      title="Official Work Time"
                      info="7:00am - 6:00pm ( Mon - Fri ) Sat, Sun & Holiday Closed"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-30">
                  <div className="contact-box">
                    <h3 className="contact-box__title h4">Leave a Message</h3>
                    <p className="contact-box__text">We’re Ready To Help You</p>
                    <FormFive />
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="tabno3">
              <div className="row">
                <div className="col-lg-6 mb-30">
                  <div className="contact-box">
                    <h3 className="contact-box__title h4">
                      United State Office Address
                    </h3>
                    <p className="contact-box__text">
                      Completely recaptiualize 24/7 communities via standards
                      compliant metrics whereas web-enabled content
                    </p>
                    <InfoMedia
                      icon="fal fa-phone-alt"
                      title="Phone Number & Email"
                      info={
                        <>
                          <a href="tel:+310259121563">+(310) 2591 21563</a>
                          <a href="mailto:info@example.com">info@example.com</a>
                        </>
                      }
                    />
                    <InfoMedia
                      icon="far fa-map-marker-alt"
                      title="Our Office Address"
                      info="258 Dancing Street, Miland Line, HUYI 21563, NewYork"
                    />
                    <InfoMedia
                      icon="far fa-clock"
                      title="Official Work Time"
                      info="7:00am - 6:00pm ( Mon - Fri ) Sat, Sun & Holiday Closed"
                    />
                  </div>
                </div>
                <div className="col-lg-6 mb-30">
                  <div className="contact-box">
                    <h3 className="contact-box__title h4"> </h3>
                    <p className="contact-box__text">We’re Ready To Help You</p>
                    <FormFive />
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </div>
  );
};

export default ContactTwo;
