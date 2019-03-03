import Link from 'next/link'
import ScrambleTitle from './ScrambleTitle.jsx'
import "./topbar.css"

export default () => (
  <div className="sticky">
    <nav className="uk-navbar-container uk-navbar-transparent" uk-navbar="">
      <div className="uk-navbar-center">
        <a className="uk-navbar-item uk-logo" href="/" id="title">
          <ScrambleTitle />
        </a>
        <ul className="uk-navbar-nav">
          <li>
            <a href="#about" uk-scroll="offset: 100;">About</a>
          </li>
          <li>
            <a href="#gallery" uk-scroll="offset: 100;">Gallery</a>
          </li>
          <li>
            <a href="#otherservices" uk-scroll="offset: 100;">LINKS</a>
          </li>
          <li>
            <Link href='/now'><a>Now</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)
