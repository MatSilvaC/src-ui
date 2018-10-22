import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Icon, Layout, Menu, } from 'antd';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

class Btn extends Component {
    render()  {
        return (
            <Menu.Item className='ant-menu-item' key={this.props.key}>{this.props.text}</Menu.Item>
        );
    }
}
export default Btn;