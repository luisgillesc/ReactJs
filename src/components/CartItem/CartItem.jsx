import { useContext } from 'react';
import CartContext from '../context/CartContext/CartContext';
import "./CartItem.css"
import useCount from '../../hooks/useCount';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


function CartItem ({ item }) {
    const { removeItem } = useContext(CartContext);
    const {count,add,subt}=useCount(item.quantity);

    return (
        <div className="cart-item">
            <Link to={`/product/${item.id}`}><img src={item.image} alt={item.title} /></Link>
            <div>
                <h3>{item.title}</h3>
                <div className='ItemCount-Container'>
                  <ItemCount stock={2} count={count} subt={subt} add={add}/>
                </div>
                <p>Precio: ${item.price}</p>
                <button onClick={() => removeItem(item.id)}>Remover</button>
            </div>
        </div>
    );
};

export default CartItem;