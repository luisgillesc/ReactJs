import '../CategoryList/CategoryList.css'
import {Link} from 'react-router-dom'

function CategoryList() {
    return(
        <ul className="CategoryListoMenu">
        <li>
        <a href="/#"></a>
            <Link to={"/"}>Item List Container</Link>
        </li>
        <li>
            <Link to={"/category/jewelery"}>jewelery</Link>
        </li>
        <li>
            <a href="/#">Stickers</a>
        </li>
</ul>
    );
}
export default CategoryList;