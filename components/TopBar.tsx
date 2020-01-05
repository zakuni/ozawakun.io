import ScrambleTitle from './ScrambleTitle'

const TopBar = () => (
  <>
    <div className="sticky">
      <a id="title" className="uk-logo" href="/">
        <ScrambleTitle />
      </a>
      <span className="toplinks uk-link-muted"><a href="/about" className="toplink">About</a><a href="/gallery" className="toplink">Gallery</a><a href="/now" className="toplink">Now</a><a href="/links" className="toplink">Links</a></span>
    </div>
    <style jsx>{`
      .sticky {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        background: linear-gradient(
          rgba(252, 252, 252, 0.95) 80%,
          rgba(252, 252, 252, 0)
        );
        margin: 10px;
        vertical-align: bottom;
        width: 100%;
        height: 70px;
      }

      .scrambleTitle {
        width: 180px;
        height: 44px;
        font-size: 2rem;
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
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
          'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
      }

      .toplinks {
        position: absolute;
        top: 10px;
        right: 50px;
        font-size: 1.1em;
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


