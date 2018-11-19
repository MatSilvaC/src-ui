import React, { Component } from 'react';
import './App.css';
import {Carousel, Noticia, NoticiaCarousel, QBoxButton, Header, HeaderItem, Cartao} from "./components";
import { Layout } from 'antd';

const {Content} = Layout;
const imgteste ='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
class App extends Component {
  render() {
    return (
      <Layout>
        <Header color='#653998'>
          <HeaderItem image icon='menu' text='menu' left />
          <HeaderItem button icon='user'/>
          {/* <HeaderItem class='tes1' image icon='logoteste' width='200px' text='logo' left /> */}
          
          <HeaderItem class='header' button text='Notificações' icon='bell'/>
          <HeaderItem class='header' button text='Turmas' icon='team'/>
        </Header>
        
      </Layout>
    );
  }
}

export default App;