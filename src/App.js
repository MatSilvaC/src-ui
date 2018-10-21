import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Cartao,Carousel,Noticia, NoticiaCarousel,Button} from "./components";
class App extends Component {
  render() {
    return (
      <div>
        <Carousel>
        <NoticiaCarousel title='Novidades' img='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
        <NoticiaCarousel title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
        </Carousel>
        <Button text='teste' color='#14a76c'/>
        <Noticia title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
        <Noticia img='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png' title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
        
      </div>
    );
  }
}

export default App;