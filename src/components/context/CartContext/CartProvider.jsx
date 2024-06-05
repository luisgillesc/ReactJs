import React, { useState } from 'react';
import CartContext from '../CartContext/CartContext';


function CartProvider  ({ children })  {
    const [cart, setCart] = useState([]);
console.log(cart);
    const addItem = (item) => {
        const existingItemIndex = cart.findIndex(cartItem => cartItem.id === item.id);
        if (existingItemIndex >= 0) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += item.quantity;
            setCart(updatedCart);
        } else {
            setCart([...cart, item]);
        }
    };

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const clearCart = () => {
        setCart([]);
    };

    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalItems }}>
            {children}
        </CartContext.Provider>
    );
};
export default CartProvider;