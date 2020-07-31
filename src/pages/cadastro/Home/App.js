import React from 'react';
import Menu from '../../../components/Menu';
import dadosIniciaia from '../../../data/dados_iniciais.json'
import BannerMain from '../../../components/BannerMain'
import Carousel from '../../../components/Carousel'
import Footer from '../../../components/Footer'

function Home() {
  return (
    <div>
      <Menu />
      <BannerMain 
        videoTitle={dadosIniciaia.categorias[0].videos[0].titulo}
        url={dadosIniciaia.categorias[0].videos[0].url}
        videoDescription={"O que é Front-end? Trabalhando na área"}   
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciaia.categorias[0]}
      />
      <Carousel 
        category={dadosIniciaia.categorias[1]}
      />
      <Carousel 
        category={dadosIniciaia.categorias[2]}
      />
      <Carousel 
        category={dadosIniciaia.categorias[3]}
      />
      <Carousel 
        category={dadosIniciaia.categorias[4]}
      />

      <Footer/>


    </div>

  );
}

export default Home;
