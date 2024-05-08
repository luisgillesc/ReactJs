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
            <a href="/category/:id">Item List Container ID</a>
        </li>
        <li>
            <a href="/#">Stickers</a>
        </li>
</ul>
    );
}
export default CategoryList;