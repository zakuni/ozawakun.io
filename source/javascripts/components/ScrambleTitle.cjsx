`
import React from 'react';
import Scramble from './Scramble.cjsx';
import { Letter, Space, Period } from '../font-family.js.cjsx';
`

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
