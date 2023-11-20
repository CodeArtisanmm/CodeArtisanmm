import React, {Fragment, useEffect, useState} from 'react';
import {Seo, Breadcrumb, ScrollTopBtn} from '../components';
import {
  HeaderOne,
  TeamSingle,
  FooterOne
} from '../containers';
import data from '../data/team.json'
import { useParams } from 'react-router-dom';


const TeamDetails = ()=> {
  const [member, setMember] = useState({});
  const {id} = useParams();
  const filterMember = data.filter(item => item.id == id)

  useEffect(() => {
    setMember(filterMember[0])
  }, [id])

  return (
    <Fragment>
    <Seo title="Team Details" />
    <HeaderOne />
    <Breadcrumb pageName="Team Details" bgImage="images/breadcumb/breadcumb-bg.jpg" />
    <TeamSingle className="space-top space-extra-bottom" member={member} />
    <FooterOne/>
    <ScrollTopBtn/>
  </Fragment>
  )
}
  


export default TeamDetails;