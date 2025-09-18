import "../css/NavBar.css"
import CartWidget from "./CartWidget";

const NavBar = () => {
    return (
        <nav className="nav-container">
            <a className="nav-links" href="">
                <img className="nav-logo" src="../logo.png" alt="Logo del Sitio" />
            </a>
            <a className="nav-links" href="">PCs Armadas</a>
            <a className="nav-links" href="">Microprocesadores</a>
            <a className="nav-links" href="">Placas de Video</a>
            <a className="nav-links" href="">Gabinetes</a>
            <a className="nav-links" href="">Notebooks</a>
            <a className="nav-links" href="">Perifericos</a>
            <CartWidget/>
        </nav>
    )
};

export default NavBar;