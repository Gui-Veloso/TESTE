import { useState } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import Container from '../../components/Container';
import '../../index.css';
import styles from "./Home.module.css"
import Category, {categories, filtrarCategoria} from '../../components/Category';



function Home() {
//import dos json -> criar um array de objetos c/ ele


function pegarNome(event){
  setNome(event.target.value);
}

const [nome, setNome] = useState("Veloso");

  return (
    <>
    <Header/>
    <Banner imagem="banner-picapau"/>
    <Container >
      <input 
      className={styles.input}
      type='text'
      placeholder='Text your name'
      onChange={pegarNome}
      />
      <h2>{nome}</h2>

      { 
        categories.map((category, index) => 
          <Category category={category}>
              {filtrarCategoria(index).map((video) => <Card id={video.id} key={video.id}/>)}
          </Category>  
        ) }
  
    </Container>
   
   
    <Footer/>
    </>
    
  );
}

export default Home
