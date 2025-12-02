import styles from './scrambletitle.module.css'

type Props = {
  className?: string,
  children: React.ReactNode
}

const Scramble: React.FC<Props> = ({className, children}) => (
  <>
    <span className={className}>{children}</span>
  </>
)


const ScrambleTitle: React.FC = () => (
  <>
    <span className={`${styles.scrambleTitle} no-underline text-inherit`}>
      ozawa<Scramble className={styles.space}>&nbsp;</Scramble>kun<Scramble className={styles.period}>.</Scramble>io
    </span>
  </>
)
export default ScrambleTitle;
