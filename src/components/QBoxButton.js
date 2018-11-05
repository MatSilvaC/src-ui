import React, { Component } from 'react';
import '../App.css';
import img from '../img'
import 'antd/dist/antd.css';
import { Button } from 'antd';

const ButtonGroup = Button.Group;

class QBoxButton extends Component {
    renderButton = (text,icon,className) => {
        return (
                <ButtonGroup className={className}>
                    {text?<Button style={this.buttonStyle()}>{text}</Button>:null}
                    {icon?
                        <Button style={this.iconStyle()}>
                            <img 
                                style={{width:'20px',marginLeft:'-9px'}} 
                                src={img[icon]}
                                alt={icon}
                            />
                        </Button>
                        :null}
                </ButtonGroup>
        );
      }

    buttonStyle = () => {
        return    {
            backgroundColor:this.props.color?this.props.color:'#575757', 
            borderColor:this.props.color?this.props.color:'#575757',
            fontSize:19, 
            color:this.props.textcolor?this.props.textcolor:'#EFEFEF',
            float:this.props.Noticia?'left':''
        };
      }
    iconStyle = () => {
        return {
            backgroundColor:this.props.color?this.props.color:'#575757', 
            borderColor:this.props.color?this.props.color:'#575757',
            opacity:0.8,
            fontSize:19, 
            fontWeight:"bolder",
            width: '20px',
            float:this.props.Noticia?'right':''
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
export default QBoxButton;