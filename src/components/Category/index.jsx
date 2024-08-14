// imports
import styles from "./Category.module.css";
import videos from "../../json/base.json"

export const categories = [
    "Pica-pau", 
    "Futurama"
  ]
  
export function filtrarCategoria (id){
    return videos.filter(video => video.category === categories[id] )
  
  }

//função
function Category({category, children}){
    return(
        <section className={styles.category}>
        <h2>{category}</h2>
        <div>  
            {children}
        </div>
      </section>
    );
}

//exportar
export default Category;
