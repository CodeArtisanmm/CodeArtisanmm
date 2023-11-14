import React from 'react';
import {
  Button,
  ImageBoxOne,
  SecTitle,
  SecSubTitle,
  InfoMedia
} from '../../components';

const AboutOne = ({ className }) => (
  <div className={`position-relative ${className || ''}`}>
    <div className="about-shape1 d-none d-xl-block">TechBiz</div>
    <div className="container z-index-common">
      <div className="row gx-60">
        <div className="col-lg-6 col-xl-5 mb-50 mb-lg-0">
          <ImageBoxOne imageOne="images/about/ab-1-1.jpg"
            imageTwo="images/about/ab-1-2.jpg"
            video="https://www.dropbox.com/s/b4k0p5swok5l8t2/videoplayback.mp4?dl=1"
          />
        </div>
        <div className="col-lg-6 col-xl-7 align-self-center">
          <SecSubTitle><i className="fas fa-bring-forward" />Get best It solution 2022</SecSubTitle>
          <SecTitle className="h1">Choosing the right business partner is Crucial!!!</SecTitle>
          <p className="mb-4 mt-1 pb-3">Welcome to our digital playground, Code Artisan where creativity meets cutting-edge technology. With a passion for creating stunning websites and a relentless pursuit of technological excellence, we're here to transform your online presence. Join us on this exciting journey, where the fusion of creativity and technology knows no bounds.
          </p>
          <InfoMedia
            image="images/icon/tel-1-1.png"
            title="24 HOURS SERVICE AVAILABLE"
            info="Call Us: +959766036922
            "
            className="call-media"
          />
          <Button path="/about">About Us<i className="far fa-long-arrow-right" /></Button>
        </div>
      </div>
    </div>
  </div>
);

export default AboutOne;