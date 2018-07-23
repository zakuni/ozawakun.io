import React from 'react';

const fonts = ["Dotum", "arial black", "Century Gothic", "Gulim", "Impact", "Tahoma", "fantasy", "cursive", "Comic Sans MS"];

const getRandomFont = function() {
  return fonts[Math.floor(Math.random() * fonts.length)];
};

const getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const Letter = (props) => (
  <span className={props.className} style={props.style}>
    {props.children}
  </span>
);

class Scramble extends React.Component {
  constructor(props) {
    super(props);
    this.state = {style: this.props.style};
  }
  toDefaultFont() {
    var defaultStyle = {
      fontFamily: 'Georgia'
    };
    Object.assign(defaultStyle, this.props.style);
    return this.setState({
      style: defaultStyle
    });
    return this.setState({
      style: this.props.style
    });
  }
  toRandomFont() {
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
    Object.assign(randomStyle, this.props.style);
    return this.setState({
      style: randomStyle
    });
  }
  scramble() {
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
  }
  componentDidMount() {
    return this.scramble();
  }
  render() {
    return (
      <Letter className={this.props.className} style={this.state.style}>
        {this.props.children}
      </Letter>
    );
  }
}

export default Scramble;
