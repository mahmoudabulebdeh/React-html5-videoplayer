import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';

import '../styles/mediaPlayerComponent.css';
import MediaProgressBar from './MediaProgressBarComponent';
import MediaControlBar from './MediaControlBarComponent';
export default class MediaPlayer extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      currentTime: 0,
      duration: 0,
      progress: '0%',
      muted: false,
    };

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.changeCurrentTime = this.changeCurrentTime.bind(this);
    this.seek = this.seek.bind(this);
    this.changePlaybackRateRate = this.changePlaybackRateRate.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
    this.setMuted = this.setMuted.bind(this);
    this.progress = this.progress.bind(this);
  }

  componentDidMount(time, duration) {
    // subscribe state change
    this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  }

  setMuted() {
    if (this.state.muted === true) {
      this.player.muted = false;
      this.setState({ muted: false });
    } else {
      this.player.muted = true;
      this.setState({ muted: true });
    }
  }

  handleStateChange(state) {
    // copy player state to this component's state

    this.setState({
      player: state,
      duration: this.player.video.getProperties().duration,
      currentTime: this.player.video.getProperties().currentTime,
      progress: this.progress(this.state.currentTime, this.state.duration),
      paused:
        this.state.player !== undefined ? this.state.player.paused : false,
    });
  }

  progress(currentTime, duration) {
    return duration !== 0 ? (currentTime * 100) / duration : 0;
  }

  play() {
    this.player.playbackRate = 1;
    this.state.paused ? this.player.play() : this.player.pause();
  }

  pause() {
    this.player.pause();
  }

  changeCurrentTime(seconds) {
    return () => {
      const { player } = this.player.getState();
      this.player.seek(player.currentTime + seconds);
    };
  }

  seek(seconds) {
    return () => {
      this.player.seek(seconds);
    };
  }

  changePlaybackRateRate(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.playbackRate = player.playbackRate + steps;
    };
  }

  changeVolume(steps) {
    return () => {
      const { player } = this.player.getState();
      this.player.volume = player.volume + steps;
    };
  }

  render() {
    return (
      <div className="container">
        <Player
          ref={player => {
            this.player = player;
          }}
          autoPlay={false}
        >
          <source src={this.props.source} />
          <ControlBar disabled autoHide={false} />
        </Player>

        <MediaControlBar
          play={() => this.play()}
          setMuted={() => {
            this.setMuted();
          }}
          state={this.state}
        />

        <MediaProgressBar
          progress={this.state.progress + '%'}
          videoSrc={this.props.source}
          seek={time => {
            this.player.seek(time);
          }}
          breakpoints={this.props.breakpoints}
        />
      </div>
    );
  }
}
