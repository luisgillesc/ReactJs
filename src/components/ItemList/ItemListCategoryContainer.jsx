import { useState , useEffect} from "react";
import './ItemListContainer.css'
import ItemList from "../Item/ItemList";
import useProducs from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import useProduc from "../../hooks/useProduct";
import Item from "../Item/Item/";
import useCategory from "../../hooks/useCategory";

function ItemListCategoryContainer() {
    const {category}=useParams();
    const {products,loading}=useCategory(category);


    return(
        <div className="main">
            <ItemList products={products}/>
        </div>
    );
}
export default ItemListCategoryContainer;