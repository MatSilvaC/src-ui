import React, { Component } from 'react';
import '../App.css';

import img from '../img'
import 'antd/dist/antd.less';
import { Menu, } from 'antd';
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

    renderImage(icon,width){
        if(!this.props.image){
            return null;
        }
        return(
            <img 
                style={{width:width?width:'30px',marginLeft:'-9px'}} 
                src={img[icon]}
                alt={icon}
            />
        );
    }

    render() {
        return (
            <Menu.Item className={this.props.class} onClick={this.props.onClick?this.props.onClick:() => (null)} onItemHover={() => (null)} style={{float: this.props.left?'left':'right',margin:this.props.button?15:0}} key={this.props.key}>
                {this.renderButton()}
                {this.renderImage(this.props.icon,this.props.width)}
                
            </Menu.Item>
        );
    }
}
export default HeaderItem;