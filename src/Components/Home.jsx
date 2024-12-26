// // import React from "react";
// // import classes from "./Home.module.css";

// // function Home() {
// //   return (
// //     <div className={classes.Home}>
// //       {/* Hero Section */}
// //       <div className={classes.Hero}>
// //         <video
// //           src="./Assets/UP2U_video.mp4"
// //           className={classes.HeroVideo}
// //           autoPlay
// //           muted
// //         ></video>
// //         <div className={classes.HeroContent}>
// //           <h1 className={classes.Heading}>
// //             Capturing Moments That Last Forever
// //           </h1>
// //           <p className={classes.SubHeading}>
// //             Professional photography by [Your Name]
// //           </p>
// //           <button className={classes.CTAButton}>Explore My Work</button>
// //         </div>
// //         <div className={classes.ScrollIndicator}></div>
// //       </div>

// //       {/* Section with Parallax Effect */}
// //       <div className={classes.ParallaxSection}>
// //         <h2 className={classes.ParallaxHeading}>
// //           Explore the Beauty of Photography
// //         </h2>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Home;
// import React from "react";
// import classes from "./Home.module.css";

// function Home() {
//   return (
//     <div className={classes.Home}>
//       {/* Hero Section */}
//       <div className={classes.Hero}>
//         <video
//           src="./Assets/UP2U_video.mp4"
//           className={classes.HeroVideo}
//           autoPlay
//           muted
//           loop
//           playsInline
//         ></video>
//         <div className={classes.HeroContent}>
//           <h1 className={classes.Heading}>
//             Capturing Moments That Last Forever
//           </h1>
//           <p className={classes.SubHeading}>
//             Professional photography by [Your Name]
//           </p>
//           <button className={classes.CTAButton}>Explore My Work</button>
//         </div>
//         <div className={classes.ScrollIndicator}></div>
//       </div>

//       {/* Section with Parallax Effect */}
//       <div className={classes.ParallaxSection}>
//         <h2 className={classes.ParallaxHeading}>
//           Explore the Beauty of Photography
//         </h2>
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import classes from "./Home.module.css";
import video from "../Assets/UP2U_video.mp4";

function Home() {
  return (
    <div className={classes.Home}>
      {/* Hero Section */}
      <div className={classes.Hero}>
        <video
          src={video}
          className={classes.HeroVideo}
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className={classes.HeroContent}>
          <h1 className={classes.Heading}>
            visuals that redefine perceptions.
          </h1>
          <p className={classes.SubHeading}>
            Professional photography by [Your Name]
          </p>
          <button className={classes.CTAButton}>Explore My Work</button>
        </div>
        <div className={classes.ScrollIndicator}></div>
      </div>

      {/* Section with Parallax Effect
      <div className={classes.ParallaxSection}>
        <h2 className={classes.ParallaxHeading}>
          Explore the Beauty of Photography
        </h2>
      </div> */}
    </div>
  );
}

export default Home;
