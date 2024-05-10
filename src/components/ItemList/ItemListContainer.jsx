import { useState , useEffect} from "react";
import './ItemListContainer.css'
import ItemList from "../Item/ItemList";

function ItemListContainer({greeting}) {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
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

    return(
        <div className="main">
            <h1>{greeting}</h1>
            <spam></spam>
            {loading ? ( // Se muestra el indicador de carga si loading es true
                        <p>Cargando productos...</p>
                    ) : (
                        <ItemList products={products}/>
                        )}
        </div>
    );
}
export default ItemListContainer;