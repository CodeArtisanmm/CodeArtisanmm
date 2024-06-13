import React from "react";
import Slider from "react-slick";
import { Button } from "../../components";
import { useTranslation } from "react-i18next";

const HeroOne = () => {
  const { t } = useTranslation();
  const HEROCONTENT = [
    {
      image: "images/hero/hero-1-1.jpg",
      title: (
        <>
          Explore our innovative web solutions tailored to your business
          needs!!!
        </>
      ),
      text: "We believe in empowering businesses through impactful web solutions. With our expertise in web solutions, we ensure your brand’s message is conveyed to your audience.",
      btn1: { text: t("about-us"), path: "/about" },
      btn2: { text: t("read-more"), path: "/about" },
    },
    {
      image: "images/hero/hero-1-2.jpg",
      title: (
        <>Unlock your online potential with our free consultation service!</>
      ),
      text: "Let's brainstorm ideas, discuss strategies, and pave the way for your online presence to thrive.Schedule your free consultation today and embark on a journey to digital excellence!",
      btn1: { text: t("about-us"), path: "/about" },
      btn2: { text: t("read-more"), path: "/about" },
    },
    {
      image: "images/hero/hero-1-3.jpg",
      title: <>Welcome to our code world</>,
      text: "Bring your vision to life, pixel by pixel, code by code.",
      btn1: { text: t("about-us"), path: "/about" },
      btn2: { text: t("read-more"), path: "/about" },
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
                <h1 className="hero-title">{slide.title}</h1>
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
