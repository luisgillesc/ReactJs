import { useContext } from 'react';
import CartItem from '../CartItem/CartItem';
import CartContext from '../context/CartContext/CartContext';

function CartContainer ()  {
    const { cart, clearCart } = useContext(CartContext);
    console.log(cart);

    // Calcular el total del carrito
    const totalAmount = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

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
                                      <div className="cart-total">
                        <h3>Total: ${totalAmount.toFixed(2)}</h3>
                    </div>
                    <button onClick={clearCart}>Clear Cart</button>
                </>
            )}
        </div>
    );
};

export default CartContainer;