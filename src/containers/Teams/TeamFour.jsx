import React from 'react';
import {TeamBoxOne} from '../../components';
import data from '../../data/team.json'

const TeamFour = ({...restProps})=> (
  <div {...restProps}>    
    <div className="container">
      <div className="row">
        {
          data.map(item => (
            <div className="col-md-6 col-lg-4 col-xl-3" key={item.id}>
              <TeamBoxOne 
                path={`/team-details/${item.id}`}
                name={item.name}
                desgination={item.desgination}
                image={item.image}
              />
            </div>
          ))
        }
      </div>
    </div>
  </div>
);


export default TeamFour;