import React, { useState } from 'react';
import './ProductCard.css';
import ItemCount from '../ItemCount/ItemCount';
import useCount from '../../hooks/useCount';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    //const [quantity, setQuantity] = useState(1);
    const {count,add,subt}=useCount(0);
    
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className={`product-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className="card-face card-front">
                
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title} />
                
                <div className="card-rating">
                    Rating: {product.rating.rate} ({product.rating.count} reviews)
                </div>
            </div>
            <div className="card-face card-back">
                <p className="card-category">Category: {product.categoryId}</p>
                <p className="card-description">{product.description}</p>
                <div className='item-counter-container' onClick={(e) => e.stopPropagation()}>
                    <br />
                        <ItemCount stock={2} count={count} subt={subt} add={add}/>
                    </div>
                <button className="buy-button" onClick={(e) => e.stopPropagation()}>Buy</button>
            </div>
        </div>
    );
};

export default ProductCard;