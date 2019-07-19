import React from 'react';
import BreakPointsList from './BreakPointsListComponent';

import '../styles/mediaProgressBarComponent.css';

const MediaProgressBar = props => {
  return (
    <div className="container mr-0 ml-0 pl-0 pr-0">
      <div className="progress relative progressBar">
        <BreakPointsList {...props} />
        <div
          className="progress-bar progress-bar"
          style={{ width: props.progress }}
        >
          <span className="ml-auto pl-2 mr-2">
            <b>{Math.floor(parseInt(props.progress, 10))}%</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MediaProgressBar;
