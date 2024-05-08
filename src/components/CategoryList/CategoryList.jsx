import '../CategoryList/CategoryList.css'

function CategoryList() {
    return (
        <nav>
            <ul className="CategoryListoMenu">
                <li>
                    <a href="/#">Cumpleaños</a>
                </li>
                <li>
                    <a href="/#">Matrimonio</a>
                </li>
                <li>
                    <a href="/#">Stickers</a>
                </li>
            </ul>
        </nav>
    );
}

export default CategoryList;