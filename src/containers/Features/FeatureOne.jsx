import React from "react";
import { FeatureBoxOne } from "../../components/";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const FeatureOne = ({ className }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const { t } = useTranslation();

  return (
    <div className={`feature-wrap1 ${className || ""}`}>
      <div className="container">
        <Slider className="row" {...settings}>
          <FeatureBoxOne
            title={t("home.service.development.title")}
            text={t("home.service.development.description")}
            image="images/icon/fe-1-1.png"
            path="/service-details/1"
          />
          <FeatureBoxOne
            title={t("home.service.marketing.title")}
            text={t("home.service.marketing.description")}
            image="images/icon/fe-1-2.png"
            path="/service-details/2"
          />
          <FeatureBoxOne
            title={t("home.service.consulting.title")}
            text={t("home.service.consulting.description")}
            image="images/icon/fe-1-3.png"
            path="/service-details/3"
          />
          <FeatureBoxOne
            title={t("home.service.maintainence.title")}
            text={t("home.service.maintainence.description")}
            image="images/icon/fe-1-3.png"
            path="/service-details/3"
          />
          <FeatureBoxOne
            title={t("home.service.webhosting.title")}
            text={t("home.service.webhosting.description")}
            image="images/icon/fe-1-3.png"
            path="/service-details/3"
          />
        </Slider>
      </div>
    </div>
  );
};

export default FeatureOne;
