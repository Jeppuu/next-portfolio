import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Projects() {

  return (
    <section id="projects" className="projects-section">
      <h2>
        Here are some of my projects
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-1 mx-4">
        <Link
          href="https://codepen.io/Jeppuu/full/yLxmWPJ"
          target="_blank"
          className="project-tile"
        >
          <div className="h-52 w-52 relative">
            <Image
              className="project-image"
              src="/img/calculator.png"
              alt="React calculator project"
              fill
              style="cover"
            />
          </div>
          <p>
            React Calculator
          </p>
        </Link>
        <Link
          href="https://codepen.io/Jeppuu/full/gOdqNgj"
          target="_blank"
          className="project-tile"
        >
          <div className="h-52 w-52 relative">
            <Image
              className="project-image"
              src="/img/toDoList.png"
              alt="to do list project"
              fill
              style="cover"
            />
          </div>
          <p>
            To Do List
          </p>
        </Link>
        <Link
          href="https://jepun-snake.jeppuu.repl.co"
          target="_blank"
          className="project-tile"
        >
          <div className="h-52 w-52 relative">
            <Image
              className="project-image"
              src="/img/snakeGame.png"
              alt="snake game project"
              fill
              style="cover"
            />
          </div>
          <p>
            Snake Game
          </p>
        </Link>
        <Link
          href="https://codepen.io/Jeppuu/full/WNgWXmB"
          target="_blank"
          className="project-tile"
        >
          <div className="h-52 w-52 relative">
            <Image
              className="project-image"
              src="/img/RGBgame.png"
              alt="RGB color game project"
              fill
              style="cover"
            />
          </div>
          <p>
            RGB Color Game
          </p>
        </Link>
        <Link
          href="https://codepen.io/Jeppuu/full/ZEqNzyd"
          target="_blank"
          className="project-tile"
        >
          <div className="h-52 w-52 relative">
            <Image
              className="project-image"
              src="/img/tic-tac-toe.png"
              alt="RGB color game project"
              fill
              style="cover"
            />
          </div>
          <p>
            Unbeatable Tic-Tac-Toe
          </p>
        </Link>
      </div>

      <Link
        href="https://codepen.io/Jeppuu/pens/public"
        className="show-btn bg-transparent  text-white py-2 px-4 border border-white rounded-lg  font-semibold shadow"
        target="_blank"
      >Show all <FontAwesomeIcon
          icon={faArrowRight}
          className="fas fa-arrow-right"
        /></Link>

    </section>
  )

}


