import Scramble from './Scramble.js';
import { Letter, Space, Period } from './font-family';

const ScrambleTitle = (props) => (
  <div className="scrambleTitle uk-link-reset">
    <Scramble Component={Letter} character='o' />
    <Scramble Component={Letter} character='z' />
    <Scramble Component={Letter} character='a' />
    <Scramble Component={Letter} character='w' />
    <Scramble Component={Letter} character='a' />
    <Scramble Component={Space} />
    <Scramble Component={Letter} character='k' />
    <Scramble Component={Letter} character='u' />
    <Scramble Component={Letter} character='n' />
    <Scramble Component={Period} />
    <Scramble Component={Letter} character='i' />
    <Scramble Component={Letter} character='o' />
  </div>
);

export default ScrambleTitle

