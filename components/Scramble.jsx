import React from 'react';

const fonts = ["Dotum", "arial black", "Century Gothic", "Gulim", "Impact", "Tahoma", "fantasy", "cursive", "Comic Sans MS"];

const getRandomFont = function() {
  return fonts[randomInt(fonts.length)];
};

const randomInt = function(max, min = 0) {
  return Math.floor(Math.random() * (max - min)) + min;
};

const wait = async function(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

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
    let defaultStyle = {
      fontFamily: 'Georgia'
    };

    return this.setState({
      style: Object.assign(defaultStyle, this.props.style)
    });
  }
  toRandomFont() {
    const randomStyle = {
      fontFamily: getRandomFont(),
      display: 'inline-block',
      transform: 'rotateY(180deg)',
      WebkitTransform: 'rotateY(180deg)',
      msTransform: 'rotateY(180deg)',
      MozTransform: 'rotateY(180deg)',
      OTransform: 'rotateY(180deg)'
    };

    return this.setState({
      style: Object.assign({}, this.state.style, randomStyle)
    });
  }
  async scramble() {
    await wait(randomInt(300));
    this.toRandomFont();
    await wait(randomInt(300));
    this.toDefaultFont();
    await wait(randomInt(14400));
    this.scramble();
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
