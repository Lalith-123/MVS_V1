import React, { useState, useEffect, useCallback } from "react";
import classes from "./CorporateFilms.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../Assets/corporate/AVC_Foods.png";
import img2 from "../Assets/corporate/DUMONT_KURNOOL.jpg";
import img3 from "../Assets/corporate/Digital_marketing.png";
import img4 from "../Assets/corporate/FS_WALL.jpg";
import img5 from "../Assets/corporate/JN_2.jpeg";
import img6 from "../Assets/corporate/JN_3.jpeg";
import img7 from "../Assets/corporate/JN_6.jpeg";
import img8 from "../Assets/corporate/Logo.png";
import img9 from "../Assets/corporate/RFP4.png";
import img10 from "../Assets/corporate/RPL.jpg";
import img11 from "../Assets/corporate/Up2U_3d.jpg";
import img12 from "../Assets/corporate/c_03.png";
import img13 from "../Assets/corporate/c_04.png";
import img14 from "../Assets/corporate/ccc.jpg";
import img15 from "../Assets/corporate/chi_annonce.png";
import img16 from "../Assets/corporate/sri_ram_navami_.png";
import img17 from "../Assets/corporate/weight.jpg";
import Header2 from "./Header2";

// Lazy Image Component
const LazyImage = ({ src, alt, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    setImageError(true);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div 
      data-aos="fade-up"
      data-aos-delay={index * 50}
      data-aos-duration="600"
      data-aos-offset="100"
      style={{ 
        position: 'relative', 
        backgroundColor: '#f0f0f0', 
        minHeight: '200px',
        overflow: 'hidden', // Important for zoom effect
        cursor: 'pointer'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!imageLoaded && !imageError && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#666',
          fontSize: '14px',
          zIndex: 1
        }}>
          {/* Loading... */}
        </div>
      )}
      
      <img 
        src={src}
        alt={alt}
        width="100%"
        loading="lazy"
        decoding="async"
        onLoad={handleImageLoad}
        onError={handleImageError}
        style={{
          opacity: imageLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          display: imageError ? 'none' : 'block',
          width: '100%',
          height: 'auto'
        }}
      />
      
      {imageError && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: '#999',
          fontSize: '14px'
        }}>
          Failed to load
        </div>
      )}
    </div>
  );
};

function CorporateFilms() {
  const [no_of_col, setNoOfCol] = useState(4);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const images = [
    img1, img5, img9, img13, img17, img2, img6, img10, img14,
    img3, img7, img11, img15, img4, img8, img12, img16
  ];

  useEffect(() => {
    // Preload first few images for better initial experience
    const preloadImages = images.slice(0, 8);
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImagesLoaded(prev => prev + 1);
      };
    });

    // Initialize AOS
    AOS.init({
      duration: 600,
      offset: 50,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
      anchorPlacement: 'top-bottom'
    });

    const handleResize = () => {
      const width = window.innerWidth;
      
      if (width > 1100) {
        setNoOfCol(4);
      } else if (width > 750) {
        setNoOfCol(3);
      } else if (width > 450) {
        setNoOfCol(2);
      } else {
        setNoOfCol(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [no_of_col]);

  const createColumns = useCallback(() => {
    const columns = Array.from({ length: no_of_col }, () => []);
    
    images.forEach((img, index) => {
      const columnIndex = index % no_of_col;
      columns[columnIndex].push({ img, originalIndex: index });
    });
    
    return columns;
  }, [no_of_col, images]);

  const columns = createColumns();

  return (
    <>
      <Header2/>
      <div className={classes.mainDiv}>
        {columns.map((column, colIndex) => (
          <div key={colIndex} className={classes.subDiv}>
            {column.map((item, imgIndex) => (
              <LazyImage
                key={`${colIndex}-${imgIndex}-${item.originalIndex}`}
                src={item.img}
                alt={`img${colIndex}-${imgIndex}`}
                index={imgIndex}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

export default CorporateFilms;
