'use client';
import Link from 'next/link'
import ScrambleTitle from './ScrambleTitle'

const TopBar = () => (
  <>
    <div className="sticky top-0">
      <Link href="/" legacyBehavior>
        <a id="title" className="uk-logo">
          <ScrambleTitle />
        </a>
      </Link>
      <span className="toplinks uk-link-text">
        <Link href="/about" legacyBehavior><a className="toplink">ABOUT</a></Link>
        <Link href="/gallery" legacyBehavior><a className="toplink">GALLERY</a></Link>
        <Link href="/now" legacyBehavior><a className="toplink">NOW</a></Link>
        <Link href="/links" legacyBehavior><a className="toplink">LINKS</a></Link>
      </span>
    </div>
    <style jsx>{`
      .sticky {
        background: linear-gradient(
          rgba(252, 252, 252, 0.95) 80%,
          rgba(252, 252, 252, 0)
        );
        margin: 10px;
        vertical-align: bottom;
        height: 70px;
        z-index: 1;
      }

      .uk-logo {
        color: #333;
        padding: 0 50px;
      }

      .topbar {
        width: 100%;
      }

      .toplink {
        padding: 0 15px;
      }

      .toplinks {
        position: absolute;
        top: 10px;
        right: 50px;
        font-size: 1em;
        letter-spacing: 0.12em;
      }

      @media screen and (max-width: 600px) {
        .sticky {
          height: 110px;
        }

        .uk-logo {
          padding: 0 15px;
        }

        .scrambleTitle {
          font-size: 1.5rem;
        }

        .toplinks {
          position: absolute;
          top: 50px;
          left: 0px;
        }
      }
    `}</style>
  </>
)

export default TopBar;


