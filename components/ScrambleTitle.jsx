import Scramble from './Scramble.jsx';

const ScrambleTitle = (props) => (
  <span className="scrambleTitle uk-link-reset">
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
  </span>
);

export default ScrambleTitle

