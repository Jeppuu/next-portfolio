import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-header">
        <h2>Let&apos;s work together!</h2>
        <p>Find me on social platforms </p>
      </div>
      <div className="contact-links">
        <Link
          id="profile-link"
          href="https://github.com/jeppuu"
          target="_blank"
          className="contact-icon"
        > <FontAwesomeIcon icon={faGithub} className="fa-brands fa-github" /> </Link>
        <Link
          href="https://linkedin.com/blomqvistj"
          target="_blank"
          className="contact-icon"
        ><FontAwesomeIcon icon={faLinkedin} className="fa-brands fa-linkedin" /></Link>
        <Link
          href="https://codepen.io/Jeppuu"
          target="_blank"
          className="contact-icon"
        ><FontAwesomeIcon icon={faCodepen} /></Link>
      </div>
    </section>
  )
}
