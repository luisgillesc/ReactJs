import { useState, useEffect } from "react";

function useProduc(id) {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Establecer loading en true al inicio de la solicitud

        fetch('https://fakestoreapi.com/products/'+id)
            .then((response) => response.json())
            .then((data) => {
                setProduct(data);
                setLoading(false); // Establecer loading en false cuando se recibe el producto
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
                setLoading(false); // También establecer loading en false en caso de error
            });
    }, [id]); // Añadir id como dependencia de efecto

    return { product, loading };
}

export default useProduc;