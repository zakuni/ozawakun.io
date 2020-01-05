type Props = {
  className?: string,
  children: any
}

const Scramble: React.FC<Props> = ({className, children}) => (
  <span className={className}>{children}</span>
)
export default Scramble
