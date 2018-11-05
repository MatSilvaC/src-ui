import React, { Component } from 'react';
import '../App.css';
import img from '../img'
import 'antd/dist/antd.css';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

class TesteButton extends Component {
    renderButton = (text,icon,className) => {
        return (
                <ButtonGroup className={className}>
                    {text?<div style={this.buttonStyle()}>{text}</div>:null}
                    {icon?
                        <div style={this.iconStyle()}>
                            <img 
                                style={{width:'20px',marginLeft:'-9px'}} 
                                src={img[icon]}
                                alt={icon}
                            />
                        </div>
                        :null}
                </ButtonGroup>
        );
      }

    buttonStyle = () => {
        return    {
            backgroundColor:this.props.color?this.props.color:'#575757',
            padding:'3px 13px',
            borderRadius:'5px 0px 0px 5px', 
            borderColor:this.props.color?this.props.color:'#575757',
            fontSize:19, 
            color:this.props.textcolor?this.props.textcolor:'#EFEFEF',
            float:'left'
        };
      }
    iconStyle = () => {
        return {
            backgroundColor:this.props.color?this.props.color:'#575757',
            padding:'3px 13px',
            borderRadius:'0px 5px 5px 0px',
            borderColor:this.props.color?this.props.color:'#575757',
            opacity:0.8,
            fontSize:19, 
            fontWeight:"bolder",
            width: '20px',
            float:'right'
        };
    }

    render()  {
        return (
        <div>
            {this.renderButton(
                this.props.text,
                this.props.icon,
                this.props.className,
                this.props.Noticia
            )}   
        </div>
        );
    }
}
export default TesteButton;