import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
<<<<<<< HEAD
import { Carousel} from 'antd';
=======
import { Carousel } from 'antd';
>>>>>>> dbe05fe1e9af3a6980ae9d9afb98a2e4e71e05e7

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