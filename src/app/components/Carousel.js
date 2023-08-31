'use client'
import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

const ProjectCarousel = ({ projectScreenshots }) => {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: true, containScroll: 'trimSnaps' })

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev() }, [emblaApi])
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext() }, [emblaApi])


  return (
    <div className="embla">
      <div className='embla_viewport' ref={emblaRef}>
        <div className="embla_container">
          {projectScreenshots.map((screenshot, index) => (
            <div key={index} className="embla_slide">
              <div className='image-wrapper'>
                <Image src={screenshot}
                  alt={`Screenshot ${index}`}
                  height={200}
                  width={350}
                  style='cover'
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="embla_prev" onClick={scrollPrev}>
        &lt;
      </button>
      <button className="embla_next" onClick={scrollNext}>
        &gt;
      </button>
    </div>
  );
};

export default ProjectCarousel;
