import React from 'react';
import Slider from 'react-slick';
import { TitleWrap, SecSubTitle, SecTitle, TeamBoxOne } from '../../components';
import data from '../../data/team.json'

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
          {
            data.map(item => (
              <TeamBoxOne path={`/team-details/${item.id}`}
                name={item.name}
                desgination={item.desgination}
                image={item.image}
                facebook = {item.facebook}
                instagram = {item.instagram}
                linkedin = {item.linkedin}
                twiter = {item.twiter}
              />
            ))
          }
        </Slider>
      </div>
    </div>
  );
}

export default TeamOne;