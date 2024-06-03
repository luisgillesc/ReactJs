import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import CategoryList from "../CategoryList/CategoryList";
import '../NavBar/NavBar.css'


function NavBar() {
    return(
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Inicio</Link>
                </li>
                <li>
                    <Link to={"/category/jewelery"}>jewelery</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;