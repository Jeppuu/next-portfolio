import Link from "next/link";
import { dynapuff } from "../layout";


export default function Navbar() {
  return (
    <nav className="flex flex-row justify-center md:justify-between items-center fixed top-0 left-0 w-full shadow z-10 text-white uppercase min-h-fit py-4">
      <span className="mx-2 md:mx-4 pl-4  text-lg md:text-xl" style={dynapuff.style} ><Link href="#about">Jenna Blomqvist</Link></span>
      <ul className=" flex flex-row mr-2 justify-end">
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

