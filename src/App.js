import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Cartao,Carousel,Noticia, NoticiaCarousel,Button, Header, HeaderButton} from "./components";

const imgteste ='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
class App extends Component {
  render() {
    return (
      <div>
        <Header color='#85134b'><HeaderButton text='teste1' key='1'/><HeaderButton text='teste2' key='2'/><HeaderButton text='teste2' key='3'/></Header>
        <Carousel>
        <NoticiaCarousel title='Novidades' img={imgteste} subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
        <NoticiaCarousel title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
        </Carousel>
        <Button wicon text='teste' color='#14a76c'/>
        <Noticia title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
        <Noticia img={imgteste} title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
        
        


      </div>
    );
  }
}

export default App;