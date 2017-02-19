import React from 'react';
import Scramble from './Scramble.cjsx';
import { Letter, Space, Period } from './font-family';

const ScrambleO = Scramble(Letter, "o");
const ScrambleZ = Scramble(Letter, "z");
const ScrambleA = Scramble(Letter, "a");
const ScrambleW = Scramble(Letter, "w");
const ScrambleK = Scramble(Letter, "k");
const ScrambleU = Scramble(Letter, "u");
const ScrambleN = Scramble(Letter, "n");
const ScrambleI = Scramble(Letter, "i");
const ScrambleSpace = Scramble(Space);
const ScramblePeriod = Scramble(Period);

const ScrambleTitle = (props) => (
  <h1 className="scrambleTitle uk-container-center uk-heading-large">
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
  </h1>
);

export default ScrambleTitle

