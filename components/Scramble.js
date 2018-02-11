import React from 'react';
import createReactClass from 'create-react-class';

const fonts = ["Dotum", "arial black", "Century Gothic", "Gulim", "Impact", "Tahoma", "fantasy", "cursive", "Comic Sans MS"];

const getRandomFont = function() {
  return fonts[Math.floor(Math.random() * fonts.length)];
};

const getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const Scramble = createReactClass({
  getInitialState: function() {
    return {
      fontFamily: ""
    };
  },
  toDefaultFont: function() {
    return this.setState({
      style: {}
    });
  },
  toRandomFont: function() {
    var randomStyle;
    randomStyle = {
      fontFamily: getRandomFont(),
      display: 'inline-block',
      transform: 'rotateY(180deg)',
      WebkitTransform: 'rotateY(180deg)',
      msTransform: 'rotateY(180deg)',
      MozTransform: 'rotateY(180deg)',
      OTransform: 'rotateY(180deg)'
    };
    return this.setState({
      style: randomStyle
    });
  },
  scramble: function() {

    new Promise((resolve, reject) => {
      setTimeout(() => {
        this.toRandomFont();
        resolve();
      }, getRandomInt(0, 300));
    }).then(() => {
      setTimeout(() => {
        this.toDefaultFont();
      }, getRandomInt(0, 300));
    }).then(() => {
      setTimeout(() => {
        this.scramble()
      }, getRandomInt(0, 14400));
    });
    ;
  },
  componentDidMount: function() {
    return this.scramble();
  },
  render: function() {
    return <this.props.Component character={this.props.character} style={this.state.style} />;
  }
});


export default Scramble;
