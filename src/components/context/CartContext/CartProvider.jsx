import { useState } from "react";




function CartProvider({children}) {
    const [cart,setCart] = useState([]);

    const agregar = (producto,cantidad)=>{
        const InCart=cart.find((item)=>item.producto.productoId==producto.productoId)
    };
    const remover = (productoId,cantidad)=>{

    };
    const limpiar = ()=>{

    };
}
export default CartProvider;