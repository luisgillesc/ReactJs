import Brand from "../Brand/Brand";
import Footer from "../Footer/Footer";
import NavContainer from "../Nav/NavContainer";
import NavBar from "../NavBar/NavBar";


function Layout({children}) {
    return(
        <div className="layout-container">
            <header className="header-container">
                <div className="header-wrapper">
                    <NavContainer/>
                </div>
            </header>
            <main className="main-container">
                {children}
            </main>
            <footer className="footer-container">
                <Footer/>
            </footer>
        </div>
    );
}
export default Layout;