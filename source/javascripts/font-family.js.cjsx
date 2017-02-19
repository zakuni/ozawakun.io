`
import React from 'react';
import Scramble from './components/Scramble.cjsx';

export const Letter = (props) => (
  <span style={props.style}>
    {props.character}
  </span>
);

export const Space = (props) => (
  <span className="space" style={props.style}>&nbsp;</span>
);

export const Period = (props) => (
  <span className="period" style={props.style}>.</span>
);
`
