import React from 'react';
import {Link} from 'react-router-dom';

const Breadcrumb = ({pageName, bgImage}) => (
  <div className="breadcumb-wrapper background-image" style={{backgroundImage: `url('${process.env.PUBLIC_URL}/${bgImage}')`}}>
      <div className="container z-index-common" >
          <div className="breadcumb-content">
              <h1 className="breadcumb-title text-dark">{pageName}</h1>
              <div className="breadcumb-menu-wrap">
                  <ul className="breadcumb-menu">
                      <li><Link to="/" className='text-dark'>Home</Link></li>
                      <li className='text-dark'>{pageName}</li>
                  </ul>
              </div>
          </div>
      </div>
  </div>
);

export default Breadcrumb;