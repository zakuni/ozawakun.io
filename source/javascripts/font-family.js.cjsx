React = require('react')

fonts = ["Dotum", "arial black", "Century Gothic", "Gulim", "Impact", "Tahoma", "fantasy", "cursive", "Comic Sans MS"]

getRandomFont = ->
  fonts[Math.floor(Math.random()*fonts.length)]

getRandomInt = (min, max) ->
  Math.floor(Math.random() * (max - min)) + min

ScrambleMixin =
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

Letter = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span style={this.state.style}>
      {this.props.character}
    </span>`

Space = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="space" style={this.state.style}>&nbsp;</span>`

Period = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="period" style={this.state.style}>.</span>`

ScrambleTitle = React.createClass
  render: ->
    `<h1 className="scrambleTitle uk-container-center uk-heading-large">
      <Letter character="o" />
      <Letter character="z" />
      <Letter character="a" />
      <Letter character="w" />
      <Letter character="a" />
      <Space />
      <Letter character="k" />
      <Letter character="u" />
      <Letter character="n" />
      <Period />
      <Letter character="i" />
      <Letter character="o" />
    </h1>`

module.exports = ScrambleTitle
