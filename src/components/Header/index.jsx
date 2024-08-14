import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
    //dentro do return, fica o que desejamos mostrar
    return(
        <>
            <header className={styles.header}>
                <Link to="/">
                    <span>GUITESTE</span>
                </Link>
                <nav>
                    <Link to="/">HOME</Link>
                    <Link to="/watch">ASSISTIR</Link>   
                    <Link to="/search">PESQUISAR</Link>   
                </nav>
           
            </header>
        </>

    );
}

export default Header;