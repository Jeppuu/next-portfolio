'use client'
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

const ProjectTile = ({ title, link, image, description, technologies }) => {
  return (
    <Link href={link} target="_blank" className="project-tile">
      <div className="h-52 w-full relative">
        <Image
          className="project-image"
          src={image}
          alt={title}
          fill
          style={'cover'}
        />
        <div className="project-details">
          <div className="project-description">{description}</div>
          <div className="project-technologies">{technologies}</div>
        </div>
      </div>
      <p>{title}</p>
    </Link>
  );
};

export default ProjectTile;
