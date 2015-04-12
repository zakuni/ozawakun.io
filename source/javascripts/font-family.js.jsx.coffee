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
    `<span className="o" style={{fontFamily: this.state.fontFamily}}>o</span>`

Z = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="z" style={{fontFamily: this.state.fontFamily}}>z</span>`

A = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="a" style={{fontFamily: this.state.fontFamily}}>a</span>`

W = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="w" style={{fontFamily: this.state.fontFamily}}>w</span>`

Space = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="space" style={{fontFamily: this.state.fontFamily}}>&nbsp;</span>`

K = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="k" style={{fontFamily: this.state.fontFamily}}>k</span>`

U = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="u" style={{fontFamily: this.state.fontFamily}}>u</span>`

N = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="n" style={{fontFamily: this.state.fontFamily}}>n</span>`

Period = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="period">.</span>`

I = React.createClass
  mixins: [ScrambleMixin]
  render: ->
    `<span className="i">i</span>`

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
