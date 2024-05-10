import "./ItemCount.css"

function ItemCount({stock,count,add,subt}) {
    return(
        <div className="item-container">
            <div className="item-count">
                <button className="item-button-subt" onClick={subt} disabled={count<=0}>-</button>
                <span className="item-count">{count}</span>
                <button className="item-button-add" onClick={add} disabled={count>=stock}>+</button>
            </div>
        </div>
    );
    
}

export default ItemCount;