import React, {useRef} from 'react';
import {
  InfoMedia,
  Button,
  ProgressOne,
  TitleWrap,
  SecSubTitle,
  SecTitle,
  FormThree
} from '../../components';

const TeamSingle = ({member, ...restProps})=> { 
  const contactArea = useRef(null);

  const scrollHandler = (event)=> {
    event.preventDefault();
    let targetOffset = contactArea.current.offsetTop - 200;
    window.scrollTo({
      top: targetOffset,
      behavior: "smooth"
    });
  }
  
  return (
    <div {...restProps}>
      <div className="container">
        <div className="row gx-60 gy-2">        
          <div className="col-lg-5 mb-30">
            <img src={member.image} alt="team-member"/>
          </div>        
          <div className="col-lg-7 col-xl-7 align-self-center mb-30">
            <div className="team-about">
              <h3 className="team-name h4"> {member.name} </h3>
              <span className="team-degi"> {member.desgination} </span>            
              <p className="team-text"> {member.summary ? member.summary :  "No Data"} </p>
              <div className="row">
                <div className="col-sm-6">
                  <InfoMedia className="team-media"
                    icon="fas fa-user"
                    title="Experience"
                    info={member.exp ?? ""}
                  />
                </div>
                <div className="col-sm-6">
                  <InfoMedia className="team-media"
                    icon="fas fa-phone-alt"
                    title="Phone One"
                    info={<a href={`tel:+959${member.phone}`}>+(959) {member.phoneone ?? ""} </a>}
                  />
                </div>
                <div className="col-sm-6">
                  <InfoMedia className="team-media"
                    icon="fas fa-envelope"
                    title="Email"
                    info={<a href="mailto:info@example.com"> {member.email ?? ""} </a>}
                  />
                </div>
                <div className="col-sm-6">
                  <InfoMedia className="team-media"
                    icon="fas fa-phone-alt"
                    title="Phone Two"
                    info={<a href={`tel:+959${member.phonetwo}`}> +(959) {member.phonetwo ?? ""}  </a>}
                  />
                </div>
              </div>            
              <div className="onepage-nav">
                <Button onclick={scrollHandler} path="#team-contact">Get In Touch<i className="far fa-arrow-right"/></Button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="team-inner background-image" style={{backgroundImage: 'url(images/bg/team-details-bg-1-1.jpg)'}}>      
        <div className="container">
          <div className="row gx-60 gy-3">
            <div className="col-lg-6">            
              <h3 className="h4 mb-3 pb-1">Personal Biography</h3>
              <p className="pe-xxl-5"> {member.desc ? member.desc : "No Data"} </p>
            </div>
            <div className="col-lg-6">              
              <h3 className="h4 mb-3 pb-1">Professional Skills</h3>
              <ProgressOne title="Business Security" now={member.business_security} />            
              <ProgressOne title="Career Development" now={member.career_development} />            
              <ProgressOne title="Business Inovation" now={member.business_inovation} />            
            </div>
          </div>
        </div>      
      </div>
      <TitleWrap className="text-center">
        <SecSubTitle>Send Us Email</SecSubTitle>
        <SecTitle className="text-capitalize h1">Feel Free To Write</SecTitle>
      </TitleWrap>
      <div className="container" ref={contactArea}>
        <div className="row justify-content-center">
          <div className="col-lg-10 col-xl-8">
            <FormThree/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamSingle;