import React, { useState } from 'react';
import PeopleDetails from '../PeopleDetails/PeopleDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
const user = <FontAwesomeIcon icon={faUser} />

const Cart = (props) => {
    const {cart} = props;
    let total = 0
    for(const people of cart){
        total = total + people.salary;
    }

    return (
        <div id="cart_box">
            {/* cart calculation */}
            <div className="cart_details">
                <h5>{user} People Added : {props.cart.length}</h5>
                <h5>Total Salary : ${total}</h5>
            </div>
            {/* people short details */}
            <div>
                {
                   cart.map(people => <PeopleDetails
                    key={people.key}
                    people={people}
                    ></PeopleDetails>) 
                }
                
                <button className="cart_btn">Buy Now</button>
            </div>
        </div>
    );
};

export default Cart;