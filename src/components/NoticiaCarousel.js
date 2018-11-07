import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import left from '../img/icon-left-black.png'
import right from '../img/icon-right-black.png'
import { Row, Col } from 'antd';
import { QBoxButton } from "../components"

class Noticia extends Component {

  renderNoticia = (title,subtitle,img) => {
    return (
        <div>
            <Row>
                <Col lg={4}>TESTE</Col>
                <Col lg={14}>
                <h1 className="carousel-title">{title}</h1>
                </Col>
                <Col lg={6}>TESTE</Col>
            </Row>
            
            <Row>
                <Col lg={4}><img src={left} alt='left' style={{ width: '20px' }}></img></Col>
                {
                  img?
                    <Col lg={9}>
                      <img className="carousel-img" alt="Novidade" src={img}/>
                    </Col>
                  :null
                }
                <Col lg={img?7:16}>
                <p className="carousel-text">{subtitle}</p>
                <QBoxButton text="Visitar" textcolor='#EFEFEF' Noticia icon='right' className="carousel-btn"/>
                </Col>
                <Col lg={4}><img src={right} alt='right' style={{ width: '20px', float: 'right' }}></img></Col>
            </Row>
        </div>
    );
  }
  render()  {
      return (
        <div style={{width: '100%', display: 'inline-block'}}>
          {this.renderNoticia(
            this.props.title,
            this.props.subtitle,
            this.props.img
          )}

        </div>
      );
    }
}

export default Noticia;