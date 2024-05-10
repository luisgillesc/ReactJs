import { useState , useEffect} from "react";
import './ItemListContainer.css'
import ItemList from "../Item/ItemList";
import useProducs from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import useProduc from "../../hooks/useProduct";
import Item from "../Item/Item/";

function ItemListContainer({greeting}) {
    const {productid}=useParams();
    const {products,loading}=useProducs();
    const {product,loading:productLoading}=useProduc(productid);
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