'use client';

const Footer = () => (
  <>
    <footer className="uk-text-center uk-link-muted uk-text-meta uk-margin-medium-top">
      <div className="uk-margin-small-bottom">
        <a href="https://twitter.com/zakuni" target="_blank" rel="noopener noreferrer" className="uk-icon-button uk-margin-small-right" uk-icon="twitter" aria-label="twitter" />
        <a href="https://www.facebook.com/zakuni" target="_blank" rel="noopener noreferrer" className="uk-icon-button  uk-margin-small-right" uk-icon="facebook" aria-label="facebook" />
        <a href="https://github.com/zakuni" target="_blank" rel="noopener noreferrer" className="uk-icon-button uk-margin-small-right" uk-icon="github" aria-label="gitbook" />
        <a href="https://www.instagram.com/zakuni/" target="_blank" rel="noopener noreferrer" className="uk-icon-button uk-margin-small-right" uk-icon="instagram" aria-label="instagram" />
        <a href="https://www.linkedin.com/in/kunioozawa/" target="_blank" rel="noopener noreferrer" className="uk-icon-button" uk-icon="linkedin" aria-label="linkedin" />
      </div>
      <div>
        <a href="http://ozawakun.io">ozawakun.io</a>, since 2013.&nbsp;<a href="mailto:contactme&#64;ozawakun.io">contactme&#64;ozawakun.io</a>
      </div>
    </footer>
    <style jsx>{`
      footer {
        padding-bottom: 40px;
      }
    `}</style>
  </>
)
export default Footer;
