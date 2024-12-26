// import React, { useState } from 'react';
// import classes from './Gallery.module.css';

// function Gallery({ images }) {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageClick = (imageUrl) => {
//     setSelectedImage(imageUrl);
//   };

//   const handleCloseModal = () => {
//     setSelectedImage(null);
//   };

//   return (
//     <div>
//       <div className={classes.galleryGrid}>
//         {images.map((imageUrl, index) => (
//           <div key={index} className={classes.imageWrapper} onClick={() => handleImageClick(imageUrl)}>
//             <img src={imageUrl} alt={`img-${index}`} className={classes.galleryImage} />
//           </div>
//         ))}
//       </div>

//       {selectedImage && (
//         <div className={classes.modal} onClick={handleCloseModal}>
//           <span className={classes.closeButton}>&times;</span>
//           <img src={selectedImage} alt="Selected" className={classes.modalImage} />
//         </div>
//       )}
//     </div>
//   );
// }

// export default Gallery;
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import classes from './Gallery.module.css';

function Gallery() {
  const location = useLocation();
  const { images } = location.state || {}; // Accessing the images from the location state
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {images ? (
        <>
          <div className={classes.galleryGrid}>
            {images.map((imageUrl, index) => (
              <div
                key={index}
                className={classes.imageWrapper}
                onClick={() => handleImageClick(imageUrl)}
              >
                <img src={imageUrl} alt={`img-${index}`} className={classes.galleryImage} />
              </div>
            ))}
          </div>

          {selectedImage && (
            <div className={classes.modal} onClick={handleCloseModal}>
              <span className={classes.closeButton}>&times;</span>
              <img src={selectedImage} alt="Selected" className={classes.modalImage} />
            </div>
          )}
        </>
      ) : (
        <p>No images available.</p>
      )}
    </div>
  );
}

export default Gallery;
