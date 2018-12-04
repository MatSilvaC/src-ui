import React, { Component } from 'react';
import './App.css';
import {Carousel, NoticiaCarousel, Header, HeaderItem, QBoxDrawer, Cartao, QBoxMenuPerfil} from "./components";
import { Layout } from 'antd';
import './App.css';

const {Content} = Layout;
const imgteste ='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png';
class App extends Component {
  state = { menuPerfil: true };

  showDrawer = () => {
    this._reactInternalFiber.child.child.child.child.stateNode.showDrawer();
  }
  showMenuPerfil = () => {
    this.setState({
      menuPerfil: !this.state.menuPerfil,
    })
};

  render() {
    return (
        <Layout>
          <QBoxDrawer />
          <Header color='#653998'>
            <HeaderItem onClick={() => {this.showDrawer();}} image icon='menu' text='menu' left />
            <HeaderItem onClick={() =>{this.showMenuPerfil()}} button icon='user'/>
            {this.state.menuPerfil && <QBoxMenuPerfil/>}
            {/* <HeaderItem class='tes1' image icon='logoteste' width='200px' text='logo' left /> */}
            
            <HeaderItem class='header' button text='Notificações' icon='bell'/>
            <HeaderItem class='header' button text='Turmas' icon='team'/>
          </Header>
          <Content style={{backgroundColor:'#FFFFFF'}}>
            <Carousel>
              <NoticiaCarousel class='tes1' title='Novidades' img={imgteste} subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
              <NoticiaCarousel title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
              <NoticiaCarousel title='Novidades' subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
              <NoticiaCarousel class='tes1' title='Novidades' img={imgteste} subtitle='LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj'/>
            </Carousel>
            <Cartao text="LLorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ullamcorper, dolor eu finibus dapibus, justo neque blandit dolor, eu lobortis est augue sed orci. Sed tincidunt viverra dolor, sed maximus lacus convallis sed. Quisque vestibulum dictum mauris nec malesuada. Proin luctus id purus a commodo.orem isadlk asldk çlsakd kasdk çsa asjdklasj dsakj dlasjdlka sjdl sjadlksaj ldkjaslkd jsalkd jsalk dj"/>
            <br/>
          </Content>
        </Layout>
    );
  }
}

export default App;