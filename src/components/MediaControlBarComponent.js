import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlay,
  faPause,
  faVolumeMute,
  faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';

import '../styles/mediaControlBarComponent.css';

const MediaControlBar = props => {
  return (
    <div className="mediaControlBar">
      <FontAwesomeIcon
        id="playPauseButton"
        onClick={() => {
          props.play();
        }}
        icon={props.state.paused ? faPlay : faPause}
        alt={props.state.paused ? 'Play' : 'Pause'}
        zindex={1}
        className="mr-1 ml-1 controlBarIcons"
      />
      <FontAwesomeIcon
        id="MuteUnmuteButton"
        onClick={() => {
          props.setMuted();
        }}
        icon={props.state.muted === true ? faVolumeMute : faVolumeUp}
        zindex={1}
        className="mr-4 ml-1 controlBarIcons"
      />
      <span className="mr-1">
        {parseFloat(props.state.currentTime / 60).toFixed(2)}
      </span>
      :
      <span className="ml-1">
        {parseFloat(props.state.duration / 60).toFixed(2)}
      </span>
    </div>
  );
};

export default MediaControlBar;
