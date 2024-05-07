import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";


function Layout({children}) {
    return(
        <div className="layout-container">
            <div className="header-wrapper">
                <Brand/>
                <NavBar/>
            </div>
            <main className="main-container">
            </main>
            <Footer/>
        </div>
    );
}
export default Layout;