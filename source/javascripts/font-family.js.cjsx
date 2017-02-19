React = require('react')
ScrambleMixin = require('./components/ScrambleMixin.cjsx')

Letter = (props) ->
  return(
    `<span style={props.style}>
      {props.character}
    </span>`
  )

Space = (props) ->
  return(
    `<span className="space" style={props.style}>&nbsp;</span>`
  )

Period = (props) ->
  return(
    `<span className="period" style={props.style}>.</span>`
  )

ScrambleTitle = React.createClass
  render: ->
    ScrambleO = ScrambleMixin(Letter, "o")
    ScrambleZ = ScrambleMixin(Letter, "z")
    ScrambleA = ScrambleMixin(Letter, "a")
    ScrambleW = ScrambleMixin(Letter, "w")
    ScrambleK = ScrambleMixin(Letter, "k")
    ScrambleU = ScrambleMixin(Letter, "u")
    ScrambleN = ScrambleMixin(Letter, "n")
    ScrambleI = ScrambleMixin(Letter, "i")
    ScrambleSpace = ScrambleMixin(Space)
    ScramblePeriod = ScrambleMixin(Period)
    `<h1 className="scrambleTitle uk-container-center uk-heading-large">
      <ScrambleO />
      <ScrambleZ />
      <ScrambleA />
      <ScrambleW />
      <ScrambleA />
      <ScrambleSpace />
      <ScrambleK />
      <ScrambleU />
      <ScrambleN />
      <ScramblePeriod />
      <ScrambleI />
      <ScrambleO />
    </h1>`

module.exports = ScrambleTitle
