'use client'
import Link from "next/link";
import Image from "next/image";
import ImageCarousel from "./ImageCarousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ProjectCarousel from "./Carousel";

export default function Projects() {
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


  return (
    <section id="projects" className="projects-section">
      <div className="flex flex-col w-full m-4 max-w-[75%]">
        <h2>See my Featured project</h2>
        {/* NATURE FORUM */}
        <div className="bg-white/75 rounded-lg pt-2 shadow-lg border">
          {/* Project Overview */}
          <div className="flex flex-col text-base items-center justify-center p-2">
            <h3 className="font-bold text-gray-600 text-lg md:text-xl mb-2">
              Nature Forum</h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-4 flex-inline text-center">
              A full stack forum application for nature related forum posts. Users can write posts, comments and add reactions. The forum requires registering with an unique username and a password.
            </p>
          </div>

          {/* Carousel for Project Screenshots */}
          <ProjectCarousel projectScreenshots={projectScreenshots} />

          {/* Technologies Used */}
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

      </div>

      <h2>
        Here are some of my other projects
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
          href="https://boundless-arrow-mandolin.glitch.me/"
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
          href="https://unbeatable-tic-tac-toe.glitch.me/"
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


