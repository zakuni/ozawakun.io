type Props = {
  className?: string,
  children: any
}

const Scramble: React.FC<Props> = ({className, children}) => (
  <span className={className}>{children}</span>
)


export default () => (
  <>
    <span className="scrambleTitle uk-link-reset">
      ozawa<Scramble className='space'>&nbsp;</Scramble>kun<Scramble className='period'>.</Scramble>io
    </span>
    <style jsx>{`
      .scrambleTitle {
        font-family: 'Georgia';
      }
    `}</style>
  </>
)
