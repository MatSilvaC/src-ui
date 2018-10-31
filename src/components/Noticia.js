import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Row, Col, Icon } from 'antd';
import {QBoxButton} from "../components"

class Noticia extends Component {
  renderNoticia = (title,subtitle,img) => {
    return (
        <div>
            <Row>
                <Col lg={1}></Col>
                <Col lg={14}>
                <h1 className="">{title}</h1>
                </Col>
            </Row>
            
            <Row>
                <Col lg={1}></Col>
                {img?<Col lg={8}>
                <img className="" alt="Novidade" src={img}/>
                </Col>:null}
                <Col lg={img?8:16}>
                <p className="">{subtitle}</p>
                <QBoxButton text="Visitar" className="carousel-btn"/>
                </Col>
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