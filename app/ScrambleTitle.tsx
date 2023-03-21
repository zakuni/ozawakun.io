import styles from './scrambletitle.module.css'

type Props = {
  className?: string,
  children: any
}

const Scramble: React.FC<Props> = ({className, children}) => (
  <>
    <span className={className}>{children}</span>
  </>
)


const ScrambleTitle = () => (
  <>
    <span className={`${styles.scrambleTitle} uk-link-reset`}>
      ozawa<Scramble className={styles.space}>&nbsp;</Scramble>kun<Scramble className={styles.period}>.</Scramble>io
    </span>
  </>
)
export default ScrambleTitle;
