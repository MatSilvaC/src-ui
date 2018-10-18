import React, { Component } from 'react';
import '../App.css';

import 'antd/dist/antd.css';
import { Carousel } from 'antd';

class CarouselCard extends Component {
  render() {
      return (
        <div>
            <Carousel autoplay adaptiveHeight="true">
            {this.props.children}
            </Carousel>
          </div>
      );
    }
}

/*class ExamCard extends Component {
    renderHeader = (done, title, subtitle) => {
      return (
        <CardHeader
          avatar={
            <Avatar>
              <DoneIcon color={done ? "primary" : "disabled"} />
            </Avatar>
          }
          title={title}
          subheader={subtitle}
        />
      );
    };
  
    renderMedia = (media, title) => {
      const images = require.context("../images", true);
      const image = images(`./${media}`);
      return (
        <CardMedia
          alt={title}
          component="img"
          height="140"
          image={image}
          title={title}
        />
      );
    };
  
    renderSupportingText = text => {
      return (
        <CardContent>
          <Typography component="p">{text}</Typography>
        </CardContent>
      );
    };
  
    renderButtons = done => {
      return (
        <CardActions>
          <Button size="small" color="primary">
            {done ? "Responder novamente" : "Responder"}
          </Button>
          <Button size="small" color="secondary">
            Outra ação :D
          </Button>
          <IconButton>
            <UnkownIcon />
          </IconButton>
        </CardActions>
      );
    };
  
    render() {
      return (
        <Card>
          {this.renderHeader(
            this.props.done,
            this.props.title,
            this.props.subtitle
          )}
          {this.renderMedia(this.props.media, this.props.title)}
          {this.renderSupportingText(this.props.text)}
          <Divider />
          {this.renderButtons(this.props.done)}
        </Card>
      );
    }
  }
  */

export default CarouselCard;