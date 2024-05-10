import { useState , useEffect} from "react";
import './ItemListContainer.css'
import ItemList from "../Item/ItemList";
import useProducs from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import useProduc from "../../hooks/useProduct";
import Item from "../Item/Item/";
import useCategory from "../../hooks/useCategory";

function ItemListContainer({greeting}) {
    const {productid}=useParams();
    const {products,loading}=useProducs();
    // Convierte productid a un número entero
    const productIdNumber = parseInt(productid);
    const {product,loading:productLoading}=useProduc(productid);
    console.log(isNaN(productIdNumber));

    if(isNaN(productIdNumber)){
        console.log(productid);
        const {products,loading:productLoading}=useCategory(productid);
    }else{
        console.log('product');
        const {product,loading:productLoading}=useProduc(productid);
    };

    console.log(productIdNumber);
console.log(typeof productIdNumber);
    
    return(
        <div className="main">
            <h1>{greeting}</h1>
            {productid ? ( // Si productid no está vacío
                productLoading ? ( // Se muestra el indicador de carga si productLoading es true
                    <p>Cargando producto...</p>
                ) : (
                    <Item product={product}/> // Renderiza el componente Item con el producto
                )
            ) : (
                loading ? ( // Se muestra el indicador de carga si loading es true
                    <p>Cargando productos...</p>
                ) : (
                    <ItemList products={products}/> // Renderiza el componente ItemList con los productos
                )
            )}
        </div>
    );
}
export default ItemListContainer;