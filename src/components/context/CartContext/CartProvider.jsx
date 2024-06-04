import React, { createContext, useState } from 'react';
import CartContext from './CartContext';


function CartProvider  ({ children })  {
    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item]);
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