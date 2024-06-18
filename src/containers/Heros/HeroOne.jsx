import React from "react";
import Slider from "react-slick";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";

const HeroOne = () => {
  const { t, i18n } = useTranslation();
  const HEROCONTENT = [
    {
      image: "images/hero/hero-1-2.jpg",
      title: <>{t("home.banner.first.title")}</>,
      text: t("home.banner.first.description"),
      btn1: { text: t("about-us"), path: "/about" },
      btn2: { text: t("contact-us"), path: "/contact" },
    },
    {
      image: "images/hero/hero-1-3.jpg",
      title: <>{t("home.banner.third.title")}</>,
      text: t("home.banner.third.description"),
      btn1: { text: t("about-us"), path: "/about" },
      btn2: { text: t("contact-us"), path: "/contact" },
    },
    {
      image: "images/hero/hero-1-2.jpg",
      title: <>{t("home.banner.second.title")}</>,
      text: t("home.banner.second.description"),
      btn1: { text: t("about-us"), path: "/about" },
      btn2: { text: t("our-service"), path: "/service" },
    },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1439,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider className="hero-layout1" {...settings}>
      {HEROCONTENT.map((slide, index) => (
        <div key={index}>
          <div className="hero-inner">
            <div className="hero-shape1"></div>
            <div className="hero-shape2"></div>
            <div
              className="hero-bg background-image"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            <div className="container">
              <div className="hero-content">
                <h1
                  className={
                    i18n.language == "my" ? "hero-title-my" : "hero-title"
                  }
                >
                  {slide.title}
                </h1>
                <p className="hero-text">{slide.text}</p>
                <div className="hero-btns">
                  <Button path={slide.btn1.path}>
                    {slide.btn1.text}
                    <i className="far fa-arrow-right" />
                  </Button>
                  <Button path={slide.btn2.path} className="style2">
                    {slide.btn2.text}
                    <i className="far fa-arrow-right" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default HeroOne;
