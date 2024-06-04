import React, { useContext } from 'react';
import { CartContext } from './CartContext';
import CartItem from './CartItem';

function CartContainer ()  {
    const { cart, clearCart } = useContext(CartContext);

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <button onClick={clearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default CartContainer;