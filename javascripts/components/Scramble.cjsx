`
import React from 'react';

const fonts = ["Dotum", "arial black", "Century Gothic", "Gulim", "Impact", "Tahoma", "fantasy", "cursive", "Comic Sans MS"]
`

getRandomFont = ->
  fonts[Math.floor(Math.random()*fonts.length)]

getRandomInt = (min, max) ->
  Math.floor(Math.random() * (max - min)) + min

Scramble = (Component, character) ->
  return React.createClass
    getInitialState: ->
      fontFamily: ""
    toDefaultFont: ->
      @setState({style: {}})
    toRandomFont: ->
      randomStyle = {
        fontFamily: getRandomFont(),
        display: 'inline-block',
        transform: 'rotateY(180deg)',
        WebkitTransform: 'rotateY(180deg)',
        msTransform: 'rotateY(180deg)',
        MozTransform: 'rotateY(180deg)',
        OTransform: 'rotateY(180deg)'
      }
      @setState({style: randomStyle})
    scramble: ->
      `
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
      `
      return
    componentDidMount: ->
      @scramble()
    render: ->
     `<Component character={character} style={this.state.style} />`

`
export default Scramble
`
