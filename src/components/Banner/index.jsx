import styles from "./Banner.module.css";

function Banner({imagem}){
    //utlizando props

    return(
        <div className={styles.banner}
        style={{backgroundImage: `url('/src/assets/${imagem}.jpg')`}}
        
        >  
        </div>
    );

}

export default Banner;