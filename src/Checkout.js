import React from 'react';
import './Checkout.css';
import Subtotal from  './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from "./StateProvider";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    
    return (
        <div className="checkout">

<div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images.unsplash.com/photo-1523199455310-87b16c0eed11?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60"
          alt=""/>

             <div>
             <h3>Hello, {user?.email}</h3>
                <h2 className="checkout__title">Your shopping Basket</h2>
                {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
            </div>
            
            <div className="checkout__right">
                <Subtotal />
             </div>
        </div>
        </div>
        </div>

    )
}

export default Checkout