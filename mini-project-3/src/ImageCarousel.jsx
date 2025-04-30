import React, { useState } from 'react';
import spi from './assets/spi.jpg';
import CP from './assets/CP.jpg';
import hulk from './assets/hulk.jpg';
import iron from './assets/iron.jpg';

function ImageCarousel() {
    const images = [
        { id: 1, src: spi, alt: 'Spider-Man' },  
        { id: 2, src: CP, alt: 'Captain America' },  
        { id: 3, src: hulk, alt: 'Hulk' },  
        { id: 4, src: iron, alt: 'Iron Man' },  
    ];
    
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container text-center mt-6">
   
      <div className="main-image mb-6">
     
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-96 h-64 object-cover mx-auto" 
        />
      </div>

   
      <div className="nav-buttons mb-6">
        <button
          onClick={prevImage}
          className="px-6 py-2 mx-4 text-white bg-red-500 hover:bg-red-700 rounded-lg transition-colors duration-300"
        >
          Previous
        </button>
        <button
          onClick={nextImage}
          className="px-6 py-2 mx-4 text-white bg-red-500 hover:bg-red-700 rounded-lg transition-colors duration-300"
        >
          Next
        </button>
      </div>

     
      <div className="thumbnails flex justify-center gap-4">
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className={`w-16 h-12 object-cover cursor-pointer transition-transform duration-300 ${
              index === currentIndex ? 'border-4 border-red-500 opacity-75' : ''
            } hover:scale-110`}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
