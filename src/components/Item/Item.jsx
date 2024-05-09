import React from 'react';
import '/src/components/Item/Item.css' // Asegúrate de tener un archivo CSS llamado Card.css para estilos personalizados
import ItemCount from '../ItemCount/ItemCount';
import useCount from '../../hooks/useCount';

function Item({ product }) {
    const {count,add,subt}=useCount(0);

  return (
    <div className="card-container">
      <img src={product.image} alt={product.title} className="card-img" />
      <div className="card-body">
        <h2 className="card-title">{product.title}</h2>
        <p className="card-price">${product.price}</p>
        <p className="card-description">{product.description}</p>
        <p className="card-category">Category: {product.category}</p>
        <div className="card-rating">
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </div>
        <div className='item-counter-container'>
            <ItemCount stock={2} count={count} subt={subt} add={add}/>
        </div>
      </div>
    </div>
  );
}

export default Item;