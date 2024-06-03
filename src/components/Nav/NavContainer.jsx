import Brand from '../Brand/Brand';
import CartWidget from '../CartWidget/CartWidget';
import '../Nav/NavContainer.css'
import NavBar from '../NavBar/NavBar';

function NavContainer(){
    return(
        <div className='Nav-Container'>
            <Brand/>
            <NavBar/>
            <CartWidget/>
        </div>
    );
}
export default NavContainer;