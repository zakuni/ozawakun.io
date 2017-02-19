React = require('react')

fonts = ["Dotum", "arial black", "Century Gothic", "Gulim", "Impact", "Tahoma", "fantasy", "cursive", "Comic Sans MS"]

getRandomFont = ->
  fonts[Math.floor(Math.random()*fonts.length)]

getRandomInt = (min, max) ->
  Math.floor(Math.random() * (max - min)) + min

ScrambleMixin = (Component, character) ->
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
      firstTimeOut = getRandomInt(0, 300)
      secondTimeOut = getRandomInt(firstTimeOut, firstTimeOut + 300)
      finalTimeOut = getRandomInt(secondTimeOut, secondTimeOut + 15000)
      @toRandomFont()
      setTimeout(@toRandomFont, firstTimeOut)
      setTimeout(@toDefaultFont, secondTimeOut)
      setTimeout(@scramble, finalTimeOut)
    componentDidMount: ->
      @scramble()
    render: ->
     `<Component character={character} style={this.state.style} />`

module.exports = ScrambleMixin
