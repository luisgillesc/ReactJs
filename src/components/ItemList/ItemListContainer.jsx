import { useState , useEffect} from "react";
import './ItemListContainer.css'
import ItemList from "../Item/ItemList";
import { useParams } from "react-router-dom";
import useProductos from "../../hooks/useFireStoreProducts";
import ProductCardv2 from "../ProductCard/ProductCard";
import ProductCard from "../ProductCard/ProductCard";


function ItemListContainer({ greeting }) {


    const { productid } = useParams();
    const typevalue=(productid ? 
        { type: 'id', value: productid }
         : 
         { type: 'all' });

    const { productos, loading, error } = useProductos(typevalue);


  if (loading) {
    return <p>Cargando...</p>;
  }
//          <ProductCard products={productos}/>
  // Manejo de errores unificado
  if (error) {
    return <p>Error al cargar los datos: {error}</p>;
  }
    return (
      <div className="main">

          <h1>{greeting}</h1>

        <div className="product-container">
          <ItemList products={productos} />
        </div>
      </div>
    );
  }
export default ItemListContainer;