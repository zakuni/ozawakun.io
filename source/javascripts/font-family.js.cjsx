`
import React from 'react';
import Scramble from './components/Scramble.cjsx';
`

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
    ScrambleO = Scramble(Letter, "o")
    ScrambleZ = Scramble(Letter, "z")
    ScrambleA = Scramble(Letter, "a")
    ScrambleW = Scramble(Letter, "w")
    ScrambleK = Scramble(Letter, "k")
    ScrambleU = Scramble(Letter, "u")
    ScrambleN = Scramble(Letter, "n")
    ScrambleI = Scramble(Letter, "i")
    ScrambleSpace = Scramble(Space)
    ScramblePeriod = Scramble(Period)
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

`
export default ScrambleTitle
`
