import { useContext } from "react";
import CartContext from "../context/CartContext/CartContext";
import CartIcon from "./CartIcon";
import { Link } from "react-router-dom";


function CartWidget() {
    const { totalItems } = useContext(CartContext);
    return(
        <div>
            <Link to={"/cart"}><CartIcon vheight={'60px'} vwidth={'60px'}/></Link>
            <span>{totalItems}</span>
        </div>
    );
}

export default CartWidget;