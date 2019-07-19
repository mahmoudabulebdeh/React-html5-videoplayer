import React from 'react';
import Breakpoint from './BreakpointComponent';

const BreakPointsListComponent = props => {
  const breakpoints = props.breakpoints.map((breakpoint, id) => {
    return (
      <Breakpoint
        seek={props.seek}
        id={'BreakpointComponentId_' + breakpoint.id}
        key={'BreakpointComponentKey_' + breakpoint.id}
        data={breakpoint}
        {...props}
      />
    );
  });

  return <div>{breakpoints}</div>;
};

export default BreakPointsListComponent;
