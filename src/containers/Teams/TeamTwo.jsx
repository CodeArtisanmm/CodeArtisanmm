import React from "react";
import Slider from "react-slick";
import { TitleWrap, SecSubTitle, SecTitle, TeamBoxTwo } from "../../components";
import { useTranslation } from "react-i18next";

const TeamTwo = ({ ...restProps }) => {
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
          slidesToShow: 3,
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
    <div {...restProps}>
      <div className="container">
        <TitleWrap className="text-center">
          <SecSubTitle>{t("home.team.header")} </SecSubTitle>
          <SecTitle className="h1 text-capitalize">
            {t("home.team.subheader")}
          </SecTitle>
        </TitleWrap>
        <Slider {...settings}>
          <TeamBoxTwo
            image="/images/team/minthetpaing.jpg"
            name="Mr. Min Thet Paing"
            desgination="Web Developer Expert"
            path="/team-details"
          />
          <TeamBoxTwo
            image="/images/team/kyalzinlinlei.jpg"
            name="Mrs. Kyal Sin Lin Lei"
            desgination="Marketing Expert"
            path="/team-details"
          />
          <TeamBoxTwo
            image="/images/team/minthurein.jpg"
            name="Mr. Min Thurein"
            desgination="UI/UX Designer Expert"
            path="/team-details"
          />
        </Slider>
      </div>
    </div>
  );
};

export default TeamTwo;
