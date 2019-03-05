import Link from 'next/link'
import ScrambleTitle from './ScrambleTitle.jsx'
import "./topbar.css"

export default () => (
  <div className="sticky">
    <a className="uk-logo" href="/" id="title">
      <ScrambleTitle />
    </a>
    <span className="toplinks uk-link-muted">
      <Link href="/about"><a className="toplink">About</a></Link>
      <Link href="/gallery"><a className="toplink">Gallery</a></Link>
      <Link href='/now'><a className="toplink">Now</a></Link>
      <Link href='/links'><a className="toplink">Links</a></Link>
    </span>
  </div>
)
