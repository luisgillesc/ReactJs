import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import NavContainer from "../Nav/NavContainer";
import NavBar from "../NavBar/NavBar";


function Layout({children}) {
    return(
        <div className="layout-container">
            <div className="header-wrapper">
                <NavContainer/>
            </div>
            <main className="main-container">
            </main>
            <Footer/>
        </div>
    );
}
export default Layout;