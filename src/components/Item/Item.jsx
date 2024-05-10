import React from 'react';
import '/src/components/Item/Item.css';// Asegúrate de tener un archivo CSS llamado Card.css para estilos personalizados
import ItemCount from '../ItemCount/ItemCount';
import useCount from '../../hooks/useCount';
import { Link } from 'react-router-dom';

function Item({ product }) {
    const {count,add,subt}=useCount(0);

  return (
    <div className="card-container">
      <Link to={`/product/${product.id}`}>
      <img src={product.image} alt={product.title} className="card-img" />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product.id}`}>
        <h2 className="card-title">{product.title}</h2>
        </Link>
        <p className="card-price">${product.price}</p>
        <p className="card-description">{product.description}</p>
        <p className="card-category">Category: {product.category}</p>
        <div className="card-rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
        <div className='item-counter-container'>
          <br />
            <ItemCount stock={2} count={count} subt={subt} add={add}/>
        </div>
        <div>
          <br />
          <button className="cart-button">Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default Item;