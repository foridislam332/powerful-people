import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './People.css'

const element = <FontAwesomeIcon icon={faShoppingCart} />

const People = (props) => {
    const {name, age, salary, citizenship, role, img} = props.people;
    return (
        <div className="col-md-4">
            <div className="people_box">
                <div className="image">
                    <img src={img} alt="people" />
                </div>
                <h2>Name<span> : {name}</span></h2>
                <h3>Role<span> : {role}</span></h3>
                <h3>Age<span> : {age}</span></h3>
                <h3>Country<span> : {citizenship}</span></h3>
                <h3>Salary<span> : ${salary}</span></h3>
                <button
                onClick={() => props.handleAddToCard(props.people)}
                className="cart_btn">{element} Add To Cart</button>
            </div>
        </div>
    );
};

export default People;