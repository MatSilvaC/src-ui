import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.less';
import { Layout, Menu } from 'antd';
const { Header} = Layout;


class Header1 extends Component {
  render()  {
      return (
      <Header style={{backgroundColor:this.props.color?this.props.color:'#282c34', width:'auto', height:'auto'}}>
        <Menu theme="dark" mode="horizontal" style={{ lineHeight: '64px', backgroundColor:this.props.color?this.props.color:'#282c34' }}>
          {this.props.children}
        </Menu>
      </Header>
      );
    }
}
export default Header1;