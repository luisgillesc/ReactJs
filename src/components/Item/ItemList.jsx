import Item from "../Item/Item/";
import ProductCard from "../ProductCard/ProductCard";
import ProductCardv2 from "../ProductCard/ProductCardv2";


function ItemList({products}) {
    return(
        <div className="productCard-container">
            {products.map((product) =>(
                <ProductCardv2 key={product.id} product={product}/>
                //<Item key={product.id} product={product}/>
            )
        )}
        </div>
    );
    
}
export default ItemList;