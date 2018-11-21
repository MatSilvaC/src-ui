import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Carousel} from 'antd';

class CarouselCard extends Component {
  render() {
      return (
        <div>
            <Carousel autoplay>
              {this.props.children}
            </Carousel>
        </div>
      );
    }
}
export default CarouselCard;