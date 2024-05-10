import { useState,useEffect } from "react";


function useProduc(id) {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/'+id)
        .then((response) => response.json())
        .then((data) => {
            setProduct(data);
            setLoading(false); // Se establece loading en false cuando se reciben las categorías
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
            setLoading(false); // También se establece loading en false en caso de error
        });
    }, []);
    return{product,loading};
}
export default useProduc;