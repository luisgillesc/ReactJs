import '../Brand/Brand.css';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo Lixs v3.png'; // Importa la imagen

function Brand() {
    return (
        <div>
            <h1>
                <Link to="/">
                    {/* Utiliza la variable Logo para la ruta de la imagen */}
                    <img src={Logo} alt="Logo" />
                </Link>
            </h1>
        </div>
    );
}

export default Brand;