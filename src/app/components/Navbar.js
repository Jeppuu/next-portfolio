import Link from "next/link";
import { dynapuff } from "../layout";


export default function Navbar() {
  return (
    <nav>
      <span className="nav-title" style={dynapuff.style} ><Link href="#about">Jenna Blomqvist</Link></span>

      <ul className="nav-links">
        <li className="nav-link"><Link href="#about">
          About
        </Link></li>
        <li className="nav-link"><Link href="#projects">
          Projects
        </Link></li>
        <li className="nav-link"><Link href="#contact">
          Contact
        </Link></li>
      </ul>
    </nav>
  )
}

