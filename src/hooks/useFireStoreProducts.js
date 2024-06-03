import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';


const useProductos = ({ type, value }) => {
    console.log(type);
    console.log(value);
    const db = getFirestore();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    // Obtener todos los productos
    const AllProductos = async () => {
      setLoading(true);
      setError(null);
      try {
        const productosCollection = collection(db, 'productos');
        const productosSnapshot = await getDocs(productosCollection);
        const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProductos(productosList);
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
      // Obtener productos por categoría
  const ProductosByCategoria = async (categoria) => {
    setLoading(true);
    setError(null);
    try {
      const productosCollection = collection(db, 'productos');
      const q = query(productosCollection, where('categoryId', '==', categoria));
      const productosSnapshot = await getDocs(q);
      const productosList = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      setProductos(productosList);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }

  };

    // Obtener un producto por ID
    const ProductoById = async (id) => {
        setLoading(true);
        setError(null);
        try {
          const productoDoc = doc(db, 'productos', id);
          const productoSnapshot = await getDoc(productoDoc);
          
          if (productoSnapshot.exists()) {
            setProductos([{ id: productoSnapshot.id, ...productoSnapshot.data() }]);

          } else {
            setError('Producto no encontradooo');
          }
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
     useEffect(() => {
        if (type === 'all') {
          AllProductos();
        } else if (type === 'category') {
          ProductosByCategoria(value);
        } else if (type === 'id') {
          ProductoById(value);
        }
      }, [type, value]);
      console.log(error);
      return {
        productos,
        loading,
        error,
      };
    };

    export default useProductos;