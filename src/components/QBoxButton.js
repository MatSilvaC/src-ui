import React, { Component } from 'react';
import '../App.css';
import img from '../img'
import 'antd/dist/antd.less';
import { Button } from 'antd';

class QBoxButton extends Component {
    renderButton = (text,icon,className) => {
        return (
                <Button style={this.mainStyle()} className={className}>
                    {/* {text?<Button style={this.buttonStyle()}>{text}</Button>:null}
                    {icon?
                        <Button style={this.iconStyle()}>
                            <img 
                                style={{width:'20px',marginLeft:'-9px'}} 
                                src={img[icon]}
                                alt={icon}
                            />
                        </Button>
                        :null} */}
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
                </Button>
        );
    }

    mainStyle = () => {
        return {
            background: 'rgba(0, 0, 0, .0)',
            border:'none',
            padding:0,
            display: 'flex'
        }
    }

    buttonStyle = () => {
        return    {
            backgroundColor:this.props.color?this.props.color:'#575757',
            padding:'2px 16px',
            borderRadius:this.props.icon?'5px 0px 0px 5px':'5px 5px 5px 5px', 
            borderColor:this.props.color?this.props.color:'#575757',
            fontSize:19, 
            color:this.props.textcolor?this.props.textcolor:'#EFEFEF'
        };
      }
    iconStyle = () => {
        return {
            backgroundColor:this.props.color?this.props.color:'#575757',
            padding:this.props.Noticia?'6px 16px':'2px 16px',
            borderRadius:this.props.text?'0px 5px 5px 0px':'5px 5px 5px 5px',
            borderColor:this.props.color?this.props.color:'#575757',
            opacity:0.8,
            fontSize:19, 
            fontWeight:"bolder",
            width: '20px'
        };
    }

    // buttonStyle = () => {
    //     return    {
    //         backgroundColor:this.props.color?this.props.color:'#575757', 
    //         borderColor:this.props.color?this.props.color:'#575757',
    //         borderRadius:this.props.icon?'5px 0px 0px 5px':'5px 5px 5px 5px', 
    //         fontSize:19, 
    //         color:this.props.textcolor?this.props.textcolor:'#EFEFEF',
    //         float:this.props.Noticia?'left':''
    //     };
    //   }
    // iconStyle = () => {
    //     return {
    //         backgroundColor:this.props.color?this.props.color:'#575757', 
    //         borderColor:this.props.color?this.props.color:'#575757',
    //         borderRadius:this.props.text?'0px 5px 5px 0px':'5px 5px 5px 5px',
    //         opacity:0.8,
    //         fontSize:19, 
    //         fontWeight:"bolder",
    //         width: '20px',
    //         float:this.props.Noticia?'right':''
    //     };
    // }

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