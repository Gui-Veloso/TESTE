//import
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
//na parte do link, iremos utlizar props!
//Card precisa receber uma parâmetro, que vai ficar entre {} dentro do parênteses
//E dentro de HREF, vamos passar o contéudo entre {} ao invés de aspas, além de colocar o centeúdo mutável como --> ${id}


function Card({id}){
    return(
        <>
            <section className={styles.card}>
                
                <Link to={`/watch/${id}`}>
                    <img src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`} alt="CAPA DO VÍDEO" />
                </Link>

            </section>
        </>
    );

}

export default Card;