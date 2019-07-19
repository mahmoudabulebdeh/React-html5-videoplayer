import React, { Component } from 'react';
import { Player, BigPlayButton } from 'video-react';
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  CardTitle,
  CardText,
  Tooltip,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import '../styles/breakpointComponent.css';

class BreakpointComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false,
    };
  }

  toggle(tooltipOpen) {
    this.setState({
      tooltipOpen: !tooltipOpen,
    });
  }

  getWidth(currentTime, duration) {
    return duration !== 0 ? (currentTime * 100) / duration : 0;
  }

  mediaObject(image_name, time, video) {
    if (image_name !== '') {
      return (
        <CardImg
          top
          width="100%"
          src={require('../assets/images/breakpoints_images/' + image_name)}
          alt={'breakPointImage_' + image_name}
        />
      );
    } else {
      return (
        <Player
          ref={player => {
            this.player = player;
          }}
          muted={true}
          autoPlay={false}
          startTime={parseInt(time)}
        >
          <source src={video} />
          <BigPlayButton position="center" disabled />
        </Player>
      );
    }
  }

  render() {
    const {
      id,
      title,
      image_name,
      description,
      time,
      duration,
    } = this.props.data;

    return (
      <div className="row">
        <Tooltip
          placement="top"
          isOpen={this.state.tooltipOpen}
          target={'TooltipTarget-' + id}
          key={id}
          id={'Tooltip-' + id}
          toggle={() => this.toggle(this.state.tooltipOpen)}
          trigger="hover"
        >
          <Card>
            <CardBody className="tooltipCardBody">
              {this.mediaObject(image_name, time, this.props.videoSrc)}
              <CardTitle className="tooltipCardTitle">{title}</CardTitle>
              <CardSubtitle />
              <CardText className="tooltipCardText">{description}</CardText>
            </CardBody>
          </Card>
        </Tooltip>
        <div
          className="absolute"
          style={{
            marginLeft: this.getWidth(time, duration) + '%',
          }}
        >
          <div className="ml-auto ">
            <Link to={'/' + title} className="breakPointLink">
              <FontAwesomeIcon
                id={'TooltipTarget-' + id}
                icon={faStar}
                onClick={() => {
                  this.props.seek(time);
                }}
                className="breakPointIcon"
                to="/topics"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BreakpointComponent;
