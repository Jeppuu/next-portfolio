'use client'
import Link from "next/link";
import Image from "next/image";
import ProjectTile from "./ProjectTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ImageCarousel from "./ImageCarousel";
import ProjectCarousel from "./Carousel";

export default function Projects() {
  /*  These are related to the featured project carousel, which is currently not in use
  const projectScreenshots = [
    '/img/main-feed.png',
    '/img/log-in.png',
    '/img/filter-feature.png',
    '/img/comments-id-post.png',
  ]
  const images = [
    '/img/main-feed.png',
    '/img/log-in.png',
    '/img/filter-feature.png',
    '/img/comments-id-post.png',
  ]
  */

  const projects = [
    {
      id: 1,
      title: 'Digipedia',
      link: 'https://digipedia.glitch.me/',
      image: '/img/digipedia.png',
      description: 'A page for looking up information about Digimon',
      technologies: 'React, TailwindCSS',
    },
    {
      id: 2,
      title: 'Nature Forum',
      link: 'https://nature-forum.vercel.app/feed',
      image: '/img/main-feed.png',
      description: 'A discussing forum for anything nature related',
      technologies: 'Next.js, TailwindCSS, SCSS, Node.js, MongoDB, Mongoose',
    },
    {
      id: 3,
      title: 'React Calculator',
      link: 'https://codepen.io/Jeppuu/full/yLxmWPJ',
      image: '/img/calculator.png',
      description: 'A basic calculator built with React',
      technologies: 'React, CSS',
    },
    {
      id: 4,
      title: 'To Do List',
      link: 'https://boundless-arrow-mandolin.glitch.me/',
      image: '/img/toDoList.png',
      description: 'A to do list app built with vanilla javascript',
      technologies: 'HTML, CSS, JavaScript',
    },
    {
      id: 5,
      title: 'Snake Game',
      link: 'https://jepun-snake.jeppuu.repl.co',
      image: '/img/snakeGame.png',
      description: "An old school snake game. What's your highscore?",
      technologies: 'JavaScript, KaboomJS, CSS',
    },
    {
      id: 6,
      title: 'RGB Color Game',
      link: 'https://codepen.io/Jeppuu/full/WNgWXmB',
      image: '/img/RGBgame.png',
      description: 'Pick the correct color based on the RGB code',
      technologies: 'HTML, CSS, JavaScript',
    },
    {
      id: 7,
      title: 'Unbeatable Tic-Tac-Toe',
      link: 'https://unbeatable-tic-tac-toe.glitch.me/',
      image: '/img/tic-tac-toe.png',
      description: 'A Tic Tac Toe with minimax algorithm. You cannot win!',
      technologies: 'HTML, CSS, JavaScript',
    },
  ]

  return (
    <section id="projects" className="projects-section">
      {/* FEATURED PROJECT – currently not in use
      <div className="flex flex-col w-full m-4 max-w-[75%]">
        <h2>See my Featured project</h2>

        <div className="bg-white/75 rounded-lg pt-2 shadow-lg border">

          <div className="flex flex-col text-base items-center justify-center p-2">
            <h3 className="font-bold text-gray-600 text-lg md:text-xl mb-2">
              Nature Forum</h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-4 flex-inline text-center">
              A full stack forum application for nature related forum posts. Users can write posts, comments and add reactions. The forum requires registering with an unique username and a password.
            </p>
          </div>


          <ProjectCarousel projectScreenshots={projectScreenshots} />


          <div className="inline-block bg-[#0881a3] text-white text-center text-sm p-2 w-full rounded h-[20%]">
            <h3 className="py-2">Technologies Used:</h3>
            <p className="flex flex-col flex-wrap gap-1 leading-relaxed text-left content-center">
              Next.js - React - Tailwind CSS - SCSS - Node.js - MongoDB - Mongoose
            </p>
            <div className="flex flex-row align-center justify-end gap-4 py-2 text-sm text-gray-200 font-500">
              <Link href="https://nature-forum.vercel.app/feed" target="_blank" rel="noopener noreferrer"
                className="hover:underline">
                Live Demo
              </Link>
              <Link href="https://github.com/jeppuu/nature-forum" target="_blank" rel="noopener noreferrer"
                className="hover:underline">
                GitHub Repo
              </Link>
            </div>
          </div>
        </div>
      </div> */}

      <h2>
        Have a look at my projects
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 grid-cols-1 mx-4">
        {projects.map((project) => (
          <ProjectTile key={project.id} {...project} />
        ))}
      </div>
      <Link
        href="https://github.com/Jeppuu?tab=repositories"
        className="show-btn bg-transparent  text-white py-2 px-4 border border-white rounded-lg  font-semibold shadow"
        target="_blank"
      >Show all <FontAwesomeIcon
          icon={faArrowRight}
          className="fas fa-arrow-right"
        /></Link>
    </section>
  )

}


