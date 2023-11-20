import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { List } from '../../components';
import { SidebarTwo } from '../';
import faqData from '../../data/faq.json';
import { useParams } from 'react-router-dom';

const ServiceSingle = ({image, title, text,...restProps}) => {
  const { id } = useParams();
  console.log('s'+id, image)
  var faqDatas = faqData.filter((faq) => faq.questionId === 's' + id);
  console.log(faqDatas.length);
  if (!faqDatas) {
    faqDatas = {
      id: '',
      questionId: '',
      question: 'FAQ Not Found',
      answer: 'Sorry, the FAQ you are looking for was not found.',
    };
  }
  return (
    <div {...restProps}>
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-8">
            <div className="mb-3 pb-3">
              <img src={process.env.PUBLIC_URL + '/' + image} alt="Project" />
            </div>
            <h2 className="h4">{title}</h2>
            <p>{text}</p>
            <div className="row gx-0 mb-4 pb-2 pt-3">
              <div className="col-xl-6">
                <img src={process.env.PUBLIC_URL + '/images/service/sr-d-1-2.jpg'} alt="project" className="w-100" />
              </div>
              <div className="col-xl-6">
                <div className="service-list-box">
                  <h3 className="h5 title">Service Features</h3>
                  <List className="list-style3">
                    <List.Item>
                      <i className="fal fa-check-circle" />We Provide Flexible IT Services
                    </List.Item>
                    <List.Item>
                      <i className="fal fa-check-circle" />Best IT Solution with Our Team
                    </List.Item>
                    <List.Item>
                      <i className="fal fa-check-circle" />Award Winning Digital Solutions
                    </List.Item>
                    <List.Item>
                      <i className="fal fa-check-circle" />25 Years Skilled Experience
                    </List.Item>
                  </List>
                </div>
              </div>
            </div>
            <h3 className="h5">The challenge of project</h3>
            <p>
              Interactively engage distributed alignments via focused alignments. Dynamically
              fabricate excellent innovation for go forward technology. Intrinsicly impact
              empowered scenarios after cost effective outsourcing. Synergistically
              productivate pandemic e-business rather than state of the art e-tailers.
            </p>
            <p>
              Completely unleash frictionless data via end-to-end services. Continually unleash
              virtual e-tailers through magnetic core competencies. Interactively engage
              distributed alignments via focused alignments.
            </p>

              {faqDatas.map((item) => (
              <Accordion defaultActiveKey={item.questionId} className="accordion-style1 layout2">
                  <Accordion.Item key={item.questionId} eventKey={item.questionId}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>
                      <p>{item.answer}</p>
                    </Accordion.Body>
                  </Accordion.Item>
              </Accordion>
              ))}

          </div>
          <div className="col-lg-4">
            <SidebarTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingle;
