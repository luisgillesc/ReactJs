import '../Brand/Brand.css'
import {Link} from 'react-router-dom'

function Brand(){
    return(
        <div>
            <h1><Link to={"/"}><img src="/src/assets/Logo Lixs v3.png" alt="" /></Link></h1>
        </div>
    );
}
export default Brand;