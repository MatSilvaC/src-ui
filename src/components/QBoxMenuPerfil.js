import React, {Component} from 'react';
import '../App.css';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import img from '../img';
import QBoxButton from './QBoxButton';

class QBoxMenuPerfil extends Component {    
    menuStyle = () =>{
        return{
          borderRadius:'10px 0px 10px 10px',
          width:170,
          height:'auto',
          position:'absolute',
          right:'65px',
          top:'70px',
          backgroundColor: "#653998",
          color:'#FFFFFF',
          fontSize:20,
          zIndex:9999
        }
    }

    divImgStyle = () =>{
        return{
            position:'absolute',
            right:'0px',
            top:'-42px',
            overflow:'hidden',
            transform: 'rotate(90deg)'
        }
    }
    imgStyle = () =>{
        return{
            width:'30px'
        }
    }
    imgPerfilStyle = () =>{
        return{
            width:'65px',
            height:'65px',
            margin:'7px 0px 0px 7px',
            borderRadius:'50%',
            backgroundColor:'#FFFFFF'
        }
    }
    bottomStyle = () =>{
        return{
            margin:'-15px 0px 0px 7px',
            fontSize:14
        }
    }

    render(){
        return (
            <div style={this.menuStyle()}>
                <div style={this.divImgStyle()}><img style={this.imgStyle()} src={img['left']} alt='left'/></div>
                <Row gutter={8}>
                    <Col span={14}><div style={this.imgPerfilStyle()}></div></Col>
                    <Col span={10}>PERFIL</Col>
                </Row>
                <Row gutter={8}>
                    <Col span={14}><div style={this.bottomStyle()}>Luciano Sizilio</div></Col>
                    <Col span={10}><QBoxButton text='sair'/></Col>
                </Row>
            </div>
        );
    }
}

export default QBoxMenuPerfil;