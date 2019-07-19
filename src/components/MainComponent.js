import React, { Component } from 'react';
import MediaPlayer from './MediaPlayerComponent';
import Header from './HeaderComponent';
import '../styles/mainComponent.css';
import { BREAKPOINTS } from '../shared/breakpoints';

// import localMovie from '../assets/videos/movie.mp4';
const onlineMovie = 'http://media.w3.org/2010/05/bunny/movie.mp4';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-2 " />
            <div className="col-12 col-md-8">
              <MediaPlayer source={onlineMovie} breakpoints={BREAKPOINTS} />
            </div>
            <div className="col-12 col-md-2" />
          </div>
        </div>
        <div className="footer">© 2019 Copyright</div>
      </div>
    );
  }
}

export default Main;
