import React from "react";
import Slider from "react-slick";
import { TitleWrap, SecSubTitle, SecTitle, TeamBoxOne } from "../../components";
import data from "../../data/team.json";
import { useTranslation } from "react-i18next";

const TeamOne = ({ ...restProps }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: false,
    speed: 1000,
    slidesToShow: 4,
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
          <SecSubTitle> {t("home.team.header")} </SecSubTitle>
          <SecTitle className="h1"> {t("home.team.subheader")} </SecTitle>
        </TitleWrap>
        <Slider className="row" {...settings}>
          {data.map((item) => (
            <TeamBoxOne
              path={`/team-details/${item.id}`}
              key={item.id}
              name={item.name}
              desgination={item.desgination}
              image={item.image}
              facebook={item.facebook}
              instagram={item.instagram}
              linkedin={item.linkedin}
              twiter={item.twiter}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TeamOne;
