// import React from 'react'
// import classes from './MyWorks.module.css';

// function MyWorks() {
//   return (
//     <div className={classes.MyWorks}>
//         <h1 className={classes.MyWorksHeading}>My Works</h1>
//         <button className={classes.MoveButton}>move left</button>
//         <div className={classes.slidingContainers}>
//             <div className={classes.Container}>
//                 <image className={classes.image}></image>
//                 <about className={classes.about}>Ads Quote</about>
//             </div>
//             <div className={classes.Container}>
//                 <image></image>
//                 <about className={classes.about}>Events Quote</about>
//             </div>
//             <div className={classes.Container}>
//                 <image className={classes.image}></image>
//                 <about className={classes.about}>Movies Quote</about>
//             </div>
//             <div className={classes.Container}>
//                 <image className={classes.image}></image>
//                 <about className={classes.about}>Weddings Quote</about>
//             </div>
//             <div className={classes.Container}>
//                 <image className={classes.image}></image>
//                 <about className={classes.about}>Photoshoots Quote</about>
//             </div>
//             <div className={classes.Container}>
//                 <image className={classes.image}></image>
//                 <about className={classes.about}>Gym Quote</about>
//             </div>
//         </div>
//         <button className={classes.MoveButton}>move right</button>
//     </div>
//   )
// }

// export default MyWorks
import React, { useState, useEffect } from 'react';
import classes from './MyWorks.module.css';

function MyWorks() {
  const [index, setIndex] = useState(0);

  const works = [
    { image: 'image1.jpg', quote: 'Ads Quote' },
    { image: 'image2.jpg', quote: 'Events Quote' },
    { image: 'image3.jpg', quote: 'Movies Quote' },
    { image: 'image4.jpg', quote: 'Weddings Quote' },
    { image: 'image5.jpg', quote: 'Photoshoots Quote' },
    { image: 'image6.jpg', quote: 'Gym Quote' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % works.length);
    }, 5000); // Slides every 5 seconds
    return () => clearInterval(interval);
  }, [works.length]);

  const visibleWorks = [
    works[index % works.length],
    works[(index + 1) % works.length],
    works[(index + 2) % works.length],
  ];

  const moveLeft = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? works.length - 1 : prevIndex - 1));
  };

  const moveRight = () => {
    setIndex((prevIndex) => (prevIndex + 1) % works.length);
  };

  return (
    <div className={classes.MyWorks}>
      <h1 className={classes.MyWorksHeading}>My Works</h1>
      <button className={classes.MoveButton} onClick={moveLeft}>move left</button>
      <div className={classes.slidingContainers}>
        {visibleWorks.map((work, i) => (
          <div key={i} className={classes.Container}>
            <img src={work.image} alt={work.quote} className={classes.image} />
            <div className={classes.about}>{work.quote}</div>
          </div>
        ))}
      </div>
      <button className={classes.MoveButton} onClick={moveRight}>move right</button>
    </div>
  );
}

export default MyWorks;
