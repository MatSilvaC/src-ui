import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Cartao,Carousel,Noticia, NoticiaCarousel} from "./components";
class App extends Component {
  render() {
    return (
      <div>
        {/* <Cartao title="asdd" subtitle="teste" />
        <Cartao done="false" title="Done" subtitle="teste" />*/}
        {/* <Carousel/>
        <Carousel>
          
        </Carousel> */}
        <Carousel>
        <div><Cartao done subtitle="teste" title="teste" color="#d9534f"/></div>
        <div><Cartao done title="teste"/></div>
        <div><Cartao done/></div>
        </Carousel>
        <Cartao done subtitle="teste" title="teste" color="#d9534f"/>
        <Noticia title="Teste" subtitle="Blablablablabla..."/>
        <NoticiaCarousel title="Teste" subtitle="Blablablablabla..."/>
        <Carousel>
        <div><Noticia title="Teste" subtitle="Blablablablabla..."/></div>
        <div><NoticiaCarousel title="Teste" subtitle="Blablablablabla..."/></div>
        </Carousel>
      </div>
    );
  }
}

export default App;