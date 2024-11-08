import { FaBluesky, FaFacebook, FaLinkedin, FaSquareGithub, FaSquareInstagram, FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => (
  <>
    <footer className="text-center uk-link-muted uk-text-meta mt-24 sm:mt-36 mb-6">
      <div className="inline-flex place-items-center gap-x-5 sm:gap-x-8 mb-4">
        <a href="https://bsky.app/profile/zakuni.bsky.social" target="_blank" rel="noopener noreferrer" title="Bluesky">
          <FaBluesky className="w-5 text-gray-500 hover:text-gray-400 transition duration-150" />
        </a>
        <a href="https://twitter.com/zakuni" target="_blank" rel="noopener noreferrer" title="X(twitter)">
          <FaSquareXTwitter className="w-5 text-gray-500 hover:text-gray-400 transition duration-150" />
        </a>
        <a href="https://www.facebook.com/zakuni" target="_blank" rel="noopener noreferrer" title="facebook">
          <FaFacebook className="w-5 text-gray-500 hover:text-gray-400 transition duration-150" />
        </a>
        <a href="https://github.com/zakuni" target="_blank" rel="noopener noreferrer" title="Github">
          <FaSquareGithub className="w-5 text-gray-500 hover:text-gray-400 transition duration-150" />
        </a>
        <a href="https://www.instagram.com/zakuni/" target="_blank" rel="noopener noreferrer" title="instagram">
          <FaSquareInstagram className="w-5 text-gray-500 hover:text-gray-400 transition duration-150" />
        </a>
        <a href="https://www.linkedin.com/in/kunioozawa/" target="_blank" rel="noopener noreferrer" title="linkedin">
          <FaLinkedin className="w-5 text-gray-500 hover:text-gray-400 transition duration-150" />
        </a>
      </div>
      <div>
        <a href="http://ozawakun.io">ozawakun.io</a>, since 2013.&nbsp;<a href="mailto:contactme&#64;ozawakun.io">contactme&#64;ozawakun.io</a>
      </div>
    </footer>
  </>
)
export default Footer;
