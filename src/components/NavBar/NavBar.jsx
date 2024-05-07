import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import '../Menu/NavBar.css'

function NavBar() {
    return(
        <div>
            <div className="NavBarOderItem">
            <CategoryList/>
            <CartWidget/>
            </div>
        </div>
    );
}

export default NavBar;