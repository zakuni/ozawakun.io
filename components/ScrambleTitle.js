import Scramble from './Scramble.js';
import { Letter, Space, Period } from './font-family';

const ScrambleTitle = (props) => (
  <div className="scrambleTitle uk-link-reset">
    <Scramble Component={Letter}>o</Scramble>
    <Scramble Component={Letter}>z</Scramble>
    <Scramble Component={Letter}>a</Scramble>
    <Scramble Component={Letter}>w</Scramble>
    <Scramble Component={Letter}>a</Scramble>
    <Scramble Component={Space} />
    <Scramble Component={Letter}>k</Scramble>
    <Scramble Component={Letter}>u</Scramble>
    <Scramble Component={Letter}>n</Scramble>
    <Scramble Component={Period} />
    <Scramble Component={Letter}>i</Scramble>
    <Scramble Component={Letter}>o</Scramble>
    <style jsx>{`
      .scrambleTitle {
        width: 140px;
        height: 40px;
      }
    `}</style>
  </div>
);

export default ScrambleTitle

