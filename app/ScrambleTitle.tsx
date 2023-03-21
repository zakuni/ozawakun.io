'use client';

type Props = {
  className?: string,
  children: any
}

const Scramble: React.FC<Props> = ({className, children}) => (
  <>
    <span className={className}>{children}</span>
    <style jsx>{`
      .space {
        font-size: 0.1rem;
      }

      @media screen and (max-width: 519px) {
        .period {
          font-size: 1rem;
        }
      }
      @media screen and (min-width: 520px) {
        .period {
          font-size: 0.9rem;
        }
      }
    `}</style>
  </>
)


const ScrambleTitle = () => (
  <>
    <span className="scrambleTitle uk-link-reset">
      ozawa<Scramble className='space'>&nbsp;</Scramble>kun<Scramble className='period'>.</Scramble>io
    </span>
    <style jsx>{`
      .scrambleTitle {
        font-family: 'Georgia';
        width: 180px;
        height: 44px;
        font-size: 2rem;
      }
    `}</style>
  </>
)
export default ScrambleTitle;
