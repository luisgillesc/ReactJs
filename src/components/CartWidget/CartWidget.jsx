import CartIcon from "./CartIcon";
import { CartContext } from './CartContext';

function CartWidget() {
    const { totalItems } = useContext(CartContext);
    return(
        <div>
            <CartIcon vheight={'60px'} vwidth={'60px'}/>
            <span>{totalItems}</span>
        </div>
    );
}

export default CartWidget;