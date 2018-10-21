import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Row, Col, Icon } from 'antd';
import {Button} from "../components"

class Noticia extends Component {
  renderNoticia = (title,subtitle,img) => {
    return (
        <div>
            <Row>
                <Col lg={5}></Col>
                <Col lg={14}>
                <h1 className="carousel-title">{title}</h1>
                </Col>
                <Col lg={5}></Col>
            </Row>
            
            <Row style={{height:"10px"}}>
                <Col lg={4}></Col>
                {img?<Col lg={8}>
                <img className="carousel-img" alt="Novidade" src={img}/>
                </Col>:null}
                <Col lg={img?8:16}>
                <p className="carousel-text">{subtitle}</p>
                <Button text="Visitar" className="carousel-btn"/>
                </Col>
                <Col lg={4}></Col>
            </Row>
        </div>
    );
  }
  render()  {
      return (
        <div>
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