import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { QBoxButton } from "../components"

class NoticiaCarousel extends Component {
  prev = () =>{
    this._reactInternalFiber.return._debugOwner.stateNode.slickPrev();
  }
  next = () =>{
    this._reactInternalFiber.return._debugOwner.stateNode.slickNext();
  }

  renderNoticia = (title,subtitle,img) => {
    return (
        <div>
            <Row>
                <Col lg={4}></Col>
                <Col lg={16}>
                <h1 className="carousel-title">{title}</h1>
                </Col>
                <Col lg={4}></Col>
            </Row>
            
            <Row>
                <Col lg={4}><QBoxButton className="sign btn-carousel" onClick={ () =>{this.prev();}} icon="left"></QBoxButton></Col>
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
                <Col lg={4}><QBoxButton className="sign btn-carousel btn-carousel-next" onClick={ () =>{this.next();}} icon="right"/></Col>
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

export default NoticiaCarousel;