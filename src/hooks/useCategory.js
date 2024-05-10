import { useState,useEffect } from "react";
import useProducs from "./useProducts";


function useCategory(category) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/category/'+category)
        .then((response) => response.json())
        .then((data) => {
            setProducts(data);
            setLoading(false); // Se establece loading en false cuando se reciben las categorías
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
            setLoading(false); // También se establece loading en false en caso de error
        });
    }, []);
    return{products,loading};
}
export default useCategory;