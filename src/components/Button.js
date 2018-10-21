import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Button, Icon } from 'antd';

const ButtonGroup = Button.Group;

class Btn extends Component {
    renderCard = (text,color,icon,wicon,className) => {
        return (
            <div>
                <ButtonGroup className={className}>
                    <Button style={{backgroundColor:color?color:'#575757', borderColor:color?color:'#575757',fontSize:19, color:'#FFFFFF'}}>{text}</Button>
                    {wicon?null:<Button style={{backgroundColor:color?color:'#575757', borderColor:color?color:'#575757', opacity:0.8,fontSize:19, color:'#FFFFFF',fontWeight:"bolder"}}><Icon type={icon?icon:"right"} /></Button>}
                </ButtonGroup>
            </div>
        );
      }

    render()  {
        return (
        <div>
            {this.renderCard(
            this.props.text,
            this.props.color,
            this.props.icon,
            this.props.wicon,
            this.props.className
            )}   
        </div>
        );
    }
}
export default Btn;