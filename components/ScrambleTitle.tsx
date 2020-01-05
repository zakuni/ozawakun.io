import Scramble from './Scramble'

export default () => (
  <>
    <span className="scrambleTitle uk-link-reset">
      <Scramble>o</Scramble><Scramble>z</Scramble><Scramble>a</Scramble><Scramble>w</Scramble><Scramble>a</Scramble><Scramble className='space'>&nbsp;</Scramble><Scramble>k</Scramble><Scramble>u</Scramble><Scramble>n</Scramble><Scramble className='period'>.</Scramble><Scramble>i</Scramble><Scramble>o</Scramble>
    </span>
    <style jsx>{`
      .scrambleTitle {
        font-family: 'Georgia';
      }
    `}</style>
  </>
)
