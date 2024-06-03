import React from 'react';
import '/src/components/ProductCard/ProductCardv2.css';
import ItemCount from '../ItemCount/ItemCount';
import useCount from '../../hooks/useCount';
//import { Link } from 'react-router-dom';

function ProductCardv2 ({ product }) {
    console.log(product);
    const {count,add,subt}=useCount(0);
    
    return (
        <div className="product">
            <div className="product__photo">
                <div className="photo-container">
                    <div className="photo-main">
                        <img src={product.image} alt={product.title}/>
                    </div>
                </div>
            </div>
            <div className="product__info">
            <div className="title">
                <h1>{product.title}</h1>
                <span>COD: {product.id}</span>
            </div>
            <div className="price">
                <span>${product.price}</span>
            </div>
            <div className="description">
                <h3>BENEFITS</h3>
                <ul>
                    <li>{product.description}</li>
                    <li>{product.categoryId}</li>
                    <li>Rating: {product.rating.rate} ({product.rating.count} reviews)</li>
                    <li>They're linked to a lowest risk of diabetes</li>
                </ul>
            </div>
            <div className='ItemCount-Container'>
                <br />
                    <ItemCount stock={2} count={count} subt={subt} add={add}/>
                <br />
            </div>
            <button className="buy--btn">ADD TO CART</button>
        </div>
    </div>
    );
};

export default ProductCardv2;