import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import backup from './images/backup.jpg';
import './PeopleCarousel.scss'


class PeopleCarousel extends Component {

  render() {

  

    const config = this.props.MDBConfig;

    return(
      <div className="people-carousel-container">
        {this.props.people.length > 0 ?
          <div className="wrapper-container">

            <div className="wrapper-wrapper">

              {/* Loops through people data and returns a carousel item */}
              {this.props.people.map((person, i) => {
                if(i <= 10){

                  return(
                    <div key={person.id} className="person_container">
                        <img className="image" src={person.profile_path && config.images ? `${config.images ? config.images.secure_base_url : ''}${config.images ? config.images.profile_sizes[1] : ''}${person.profile_path}` : backup} alt={person.name} />
                        <h3 className="title">{person.character}</h3>
                        <h3 className="title">{person.name}</h3> 

                    </div>
                  );
                  }
              })}


            </div>


          </div>
        :
        <p className="people-carousel-container-error">No cast found :(</p>
      }

      </div>
    );

  }
};

export default withRouter(PeopleCarousel);
