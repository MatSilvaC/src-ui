import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Card, Divider, Rate } from 'antd';
const { Meta } = Card;

class Cartao extends Component {
  renderCard = (text) => {
    return (
      <Card
        style={{width:300,borderRadius:'10px 0px 10px 0px',borderWidth:0,backgroundColor:'#f79810',margin:5}}
        cover={<div><div style={{height:20}}></div><img alt="imagem" style={{width:'100%'}} src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" /></div>}
        actions={[<Rate/>]}
      >
        <Meta
          // avatar={
          //   <Avatar>
          //       <Icon type={!done?"close":"check" } style={!done?{color:"#d9534f"}:{color:"#5cb85c"}} theme="outlined" />
          //   </Avatar>
          // }
          description={[<div key="0" style={{color:'#FFFFFF',fontSize:15,lineHeight:'15px'}}>{text}</div>]}
        />
        <Divider style={{marginBottom:-26,backgroundColor:'#494949'}}/>
      </Card>
    );
  }
  render()  {
      return (
        <div>
          {this.renderCard(
            this.props.text
          )}

        </div>
      );
    }
}
export default Cartao;