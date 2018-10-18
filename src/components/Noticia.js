import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Row, Col, Icon, Button } from 'antd';

class Noticia extends Component {
  renderNoticia = (title,subtitle) => {
    return (
        <div>
            <Row>
                <Col lg={5}></Col>
                <Col lg={14}>
                <h1 className="">{title}</h1>
                </Col>
                <Col lg={5}></Col>
            </Row>
            
            <Row>
                <Col lg={5}></Col>
                <Col lg={6}>
                <img className="" alt="Novidade" src={"https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"}/>
                </Col>
                <Col lg={8}>
                <p className="">{subtitle}</p>
                <Button type="primary" className="">Visitar<Icon type="right"></Icon></Button>  
                </Col>
                <Col lg={5}></Col>
            </Row>
        </div>
    );
  }
  render()  {
      return (
        <div>
          {this.renderNoticia(
            this.props.title,
            this.props.subtitle
          )}

        </div>
      );
    }
}

export default Noticia;