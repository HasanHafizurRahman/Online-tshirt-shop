import React from 'react';
import './Cart.css'
const Cart = ({cart, handleRemoveFromCart}) => {
    return (
        <div>
            <h2>Item selected: {cart.length}</h2>
           {
               cart.map(tShirt => <p>
                   {tShirt.name}
                   <button onClick={()=>handleRemoveFromCart(tShirt)} className='btn-dlt'>X</button></p>
                   )
           }
        </div>
    );
};

export default Cart;