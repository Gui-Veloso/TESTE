import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./PageNotFound.module.css"
import PiTriste from "../../assets/triste.png"

function PageNotFound(){
    return(
    <div>
        <Header/>
        <section className={styles.container}>
            
            <h2>Desculpe.. Não conseguimos encontrar esse conteúdo</h2>
            <img src={PiTriste} alt="Pica-pau Triste" />
           
        </section>
        <Footer/>
    </div>
    );

}

export default PageNotFound;