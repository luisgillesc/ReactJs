import Brand from '../Brand/Brand';
import '../Nav/NavContainer.css'
import NavBar from '../NavBar/NavBar';

function NavContainer(){
    return(
        <div className='Nav-Container'>
            <Brand/>
            <NavBar/>
        </div>
    );
}
export default NavContainer;