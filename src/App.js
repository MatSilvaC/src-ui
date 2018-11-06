import React, { Component } from 'react';
import './App.css';
import {Carousel,Noticia, NoticiaCarousel,QBoxButton, Header, HeaderItem, Cartao} from "./components";
import { Layout } from 'antd';

const {Content} = Layout;

const imgteste ='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
class App extends Component {
  render() {
    return (
      <Layout>
        <Header color='#653998'>
          <HeaderItem image icon='menu' text='menu' key='0' left />
          <HeaderItem image icon='logoteste' width='200px' text='logo' key='1' left />
          <HeaderItem button icon='user' key='2'/>
          <HeaderItem button text='Notificações' icon='bell' key='3'/>
          <HeaderItem button text='Turmas' icon='team' key='4'/>
        </Header>
        <Content>
          <Carousel>
            <NoticiaCarousel title='Novidades' img={imgteste} subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
            <NoticiaCarousel title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
          </Carousel>
          <Noticia title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
          <Noticia img={imgteste} title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/> 
          <br/>
          <Cartao text='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
        </Content>
      </Layout>
    );
  }
}

export default App;