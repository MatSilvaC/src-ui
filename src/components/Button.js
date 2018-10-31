import React, { Component } from 'react';
import '../App.css';
import img from '../img'
import 'antd/dist/antd.css';
import { Button, Icon } from 'antd';

const ButtonGroup = Button.Group;

class QBoxButton extends Component {
    renderCard = (text,color,icon,className,textcolor) => {
        return (
                <ButtonGroup className={className}>
                    {text?<Button style={this.buttonStyle()}>{text}</Button>:null}
                    {icon?
                        <Button style={this.iconStyle()}>
                            <img 
                                style={{width:'20px',marginLeft:'-9px'}} 
                                src={img.bell}
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
            color:this.props.textcolor
        };
      }
    iconStyle = () => {
        return {
            backgroundColor:this.props.color?this.props.color:'#575757', 
            borderColor:this.props.color?this.props.color:'#575757',
            opacity:0.8,
            fontSize:19, 
            color:this.props.textcolor,
            fontWeight:"bolder",
            width: '20px'
        };
    }

    render()  {
        return (
        <div>
            {this.renderCard(
                this.props.text,
                this.props.color,
                this.props.icon,
                this.props.className,
                this.props.textcolor
            )}   
        </div>
        );
    }
}
export default QBoxButton;