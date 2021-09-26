import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import People from '../People/People';
import './Peoples.css'

const Peoples = () => {
    const [peoples, setPeoples] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() =>{
        fetch('./powerful-people.JSON')
            .then(res => res.json())
            .then(data => setPeoples(data))
    }, [])

    // cart handler
    const handleAddToCard = (people) =>{
        const newCart = [...cart, people];
        setCart(newCart);
    }
    return (
        <div className="peoples_container row">
                {/* peoples area */}
                <div className="row g-4 col-md-9">
                    {
                        peoples.map(people => <People
                            key={people.key}
                            people={people}
                            handleAddToCard={handleAddToCard}
                            ></People>)
                    }
                </div>

                {/* cart area */}
                <div className="cart_box col-md-3">
                    <Cart cart={cart}></Cart>
                </div>
        </div>
    );
};

export default Peoples;