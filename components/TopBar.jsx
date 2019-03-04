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
            <Link href="/gallery"><a>Gallery</a></Link>
          </li>
          <li>
            <Link href='/now'><a>Now</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)
