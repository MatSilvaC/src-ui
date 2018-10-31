import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Icon, Layout, Menu, } from 'antd';
import { QBoxButton } from '.'

class HeaderItem extends Component {
    renderButton() {
        if (!this.props.button) {
            return null;
        }
        return (
            <QBoxButton 
                text={this.props.text} 
                color='#EFEFEF' 
                icon={this.props.icon} 
                textcolor='#262626'/>
            );
    }

    renderImage(){
        if(!this.props.image){
            return null;
        }
        return(
            <QBoxButton 
                text={this.props.text} 
                color='#EFEFEF' 
                icon={this.props.icon} 
                textcolor='#262626'/>
        );
    }

    render()  {
        return (
            <Menu.Item className='ant-menu-item' style={{float: this.props.left?'left':'right'}} key={this.props.key}>
                {this.renderButton()}
                {this.renderImage()}
                
            </Menu.Item>
        );
    }
}
export default HeaderItem;