fonts = ["Dotum", "arial black", "Century Gothic", "Gulim", "Impact", "Tahoma", "fantasy", "cursive", "Comic Sans MS"]

getRandomFont = ->
  fonts[Math.floor(Math.random()*fonts.length)]

getRandomInt = (min, max) ->
  Math.floor(Math.random() * (max - min)) + min

ScrambleMixin =
  getInitialState: ->
    fontFamily: ""
  toDefaultFont: ->
    @setState({fontFamily: ""})
  toRandomFont: ->
    @setState({fontFamily: getRandomFont()})
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

O = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span style={{fontFamily: this.state.fontFamily}}>o</span>`

Z = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span style={{fontFamily: this.state.fontFamily}}>z</span>`

A = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span style={{fontFamily: this.state.fontFamily}}>a</span>`

W = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span style={{fontFamily: this.state.fontFamily}}>w</span>`

Space = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="space" style={{fontFamily: this.state.fontFamily}}>&nbsp;</span>`

K = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span style={{fontFamily: this.state.fontFamily}}>k</span>`

U = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span style={{fontFamily: this.state.fontFamily}}>u</span>`

N = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span style={{fontFamily: this.state.fontFamily}}>n</span>`

Period = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="period" style={{fontFamily: this.state.fontFamily}}>.</span>`

I = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span style={{fontFamily: this.state.fontFamily}}>i</span>`

ScrambleTitle = React.createClass
  render: ->
    `<h1 className="scrambleTitle uk-container-center uk-heading-large">
      <O />
      <Z />
      <A />
      <W />
      <A />
      <Space />
      <K />
      <U />
      <N />
      <Period />
      <I />
      <O />
    </h1>`

$ ->
  React.render(
    `<ScrambleTitle />`,
    document.getElementById('title')
  )
