import React from 'react';
import './PeopleDetails.css'

const PeopleDetails = (props) => {
    const {name, img} = props.people;
    return (
        <div className="details_box">
            <div className="small_img">
                <img src={img} alt="people" />
            </div>
            <h5>{name}</h5>
        </div>
    );
};

export default PeopleDetails;