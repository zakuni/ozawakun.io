import Scramble from './Scramble.js';
import { Letter } from './font-family';

const ScrambleTitle = (props) => (
  <div className="scrambleTitle uk-link-reset">
    <Scramble Component={Letter}>o</Scramble>
    <Scramble Component={Letter}>z</Scramble>
    <Scramble Component={Letter}>a</Scramble>
    <Scramble Component={Letter}>w</Scramble>
    <Scramble Component={Letter}>a</Scramble>
    <Scramble Component={Letter} className='space'>&nbsp;</Scramble>
    <Scramble Component={Letter}>k</Scramble>
    <Scramble Component={Letter}>u</Scramble>
    <Scramble Component={Letter}>n</Scramble>
    <Scramble Component={Letter} className='period'>.</Scramble>
    <Scramble Component={Letter}>i</Scramble>
    <Scramble Component={Letter}>o</Scramble>
    <style jsx>{`
      .scrambleTitle {
        width: 140px;
        height: 40px;
      }
      :global(.space) {
        font-size: 0.1rem;
      }
      @media screen and (max-width: 519px) {
        :global(.period) {
          font-size: 1rem;
        }
      }
      @media screen and (min-width: 520px) {
        :global(.period) {
          font-size: 0.9rem;
        }
      }
    `}</style>
  </div>
);

export default ScrambleTitle

