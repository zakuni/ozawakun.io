import Scramble from './Scramble.js';

const ScrambleTitle = (props) => (
  <div className="scrambleTitle uk-link-reset">
    <Scramble>o</Scramble>
    <Scramble>z</Scramble>
    <Scramble>a</Scramble>
    <Scramble>w</Scramble>
    <Scramble>a</Scramble>
    <Scramble className='space'>&nbsp;</Scramble>
    <Scramble>k</Scramble>
    <Scramble>u</Scramble>
    <Scramble>n</Scramble>
    <Scramble className='period'>.</Scramble>
    <Scramble>i</Scramble>
    <Scramble>o</Scramble>
    <style jsx>{`
      .scrambleTitle {
        width: 150px;
        height: 44px;
        font-size: 1.6rem;
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

