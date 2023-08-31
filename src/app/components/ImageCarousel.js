'use client'
import React, { useState } from 'react';
import Image from 'next/legacy/image';
import cn from 'classnames';

const ImageCarousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative">
      <div className="carousel-container">
        {images.map((src, index) => (
          <div
            key={index}
            className={cn('carousel-item', { 'carousel-item-active': index === activeIndex })}
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
      <button className="carousel-button carousel-button-prev" onClick={handlePrev}>
        &#8592;
      </button>
      <button className="carousel-button carousel-button-next" onClick={handleNext}>
        &#8594;
      </button>
      <div className="carousel-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={cn('carousel-dot', { 'carousel-dot-active': index === activeIndex })}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
