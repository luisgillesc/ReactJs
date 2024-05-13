import Item from "../Item/Item/";


function ItemListCategory({products}) {
    return(
        <div>
            {products.map((product) =>(
                <Item key={product.id} product={product}/>
            )
        )}
        </div>
    );
    
}
export default ItemListCategory;