import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Seo, Breadcrumb, ScrollTopBtn } from '../components';
import { HeaderOne, ServiceSingle, FooterOne } from '../containers';
import serviceDetailsData from '../data/service.json';
const ServiceDetails = () => {
  
  const { id } = useParams();

  // Find the service detail with the matching 'id'
  const selectedService = serviceDetailsData.find((service) => service.id === id);

  if (!selectedService) {
    return <div>Service detail not found!</div>;
  }

  return (
    <Fragment>
      <Seo title={`Service Details - ${selectedService.title}`} />
      <HeaderOne />
      <Breadcrumb pageName={`Services Details - ${selectedService.title}`} bgImage="images/breadcumb/breadcumb-bg.jpg" />
      <ServiceSingle
        className="space-top space-extra-bottom"
        image={selectedService.image}
        title={selectedService.title}
        text={selectedService.text}
      />
      <FooterOne />
      <ScrollTopBtn />
    </Fragment>
  );
};

export default ServiceDetails;
