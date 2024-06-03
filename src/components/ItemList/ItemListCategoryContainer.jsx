import { useState , useEffect} from "react";
import './ItemListContainer.css'
import ItemList from "../Item/ItemList";
import useProducs from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import useProduc from "../../hooks/useProduct";
import Item from "../Item/Item/";
import useCategory from "../../hooks/useCategory";
import useProductos from "../../hooks/useFireStoreProducts";

function ItemListCategoryContainer() {
    const {category}=useParams();
    //const {products,loading}=useCategory(category);
    const { productos, loading, error } = useProductos({ type: 'category', value: category });
   
    if (loading) {
        return <p>Cargando...</p>;
      }
    //          <ProductCard products={productos}/>
      // Manejo de errores unificado
      if (error) {
        return <p>Error al cargar los datos: {error}</p>;
      }

    return(
        <div className="main">
            <ItemList products={productos}/>
        </div>
    );
}
export default ItemListCategoryContainer;