import React from 'react';
import Slider from 'react-slick';
import { TitleWrap, SecSubTitle, SecTitle, TeamBoxOne } from '../../components';

const TeamOne = ({ ...restProps }) => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 8000,
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
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div {...restProps}>
      <div className="container">
        <TitleWrap className="text-center">
          <SecSubTitle>Great Team Members</SecSubTitle>
          <SecTitle className="h1">We Have Expert Team</SecTitle>
        </TitleWrap>
        <Slider className="row" {...settings}>
          <TeamBoxOne path="/team-details"
            name="Min Thurein"
            desgination="UI/ UX designer"
            image="images/team/t-1-1.jpg"
          />
          <TeamBoxOne path="/team-details"
            name="Min Thet Paing"
            desgination="Full Stack Developer"
            image="images/team/t-1-2.jpg"
          />
          <TeamBoxOne path="/team-details"
            name="Thura Htun"
            desgination="Full Stack  Developer"
            image="images/team/t-1-3.jpg"
          />
          <TeamBoxOne path="/team-details"
            name="Phyo Phyo Kyaw"
            desgination="Full Stack Developer"
            image="images/team/t-1-4.jpg"
          />
          <TeamBoxOne path="/team-details"
            name="Hein Htet Naing"
            desgination="Developer"
            image="images/team/t-1-5.jpg"
          />
          <TeamBoxOne path="/team-details"
            name="Waiyan Htet Aung"
            desgination="Cloud Architecture/System Administrator"
            image="images/team/t-1-5.jpg"
          />
        </Slider>
      </div>
    </div>
  );
}

export default TeamOne;