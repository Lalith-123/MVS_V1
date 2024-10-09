import React from 'react';
import classes from './Home.module.css';

function Home() {
  return (
    <div className={classes.Home}>
      {/* Hero Section */}
      <div className={classes.Hero}>
        <div className={classes.HeroContent}>
          <h1 className={classes.Heading}>Capturing Moments That Last Forever</h1>
          <p className={classes.SubHeading}>Professional photography by [Your Name]</p>
          <button className={classes.CTAButton}>Explore My Work</button>
        </div>
        <div className={classes.ScrollIndicator}></div>
      </div>

      {/* Section with Parallax Effect */}
      <div className={classes.ParallaxSection}>
        <h2 className={classes.ParallaxHeading}>Explore the Beauty of Photography</h2>
      </div>

      {/* About Section or More Info */}
      {/* <div className={classes.About}>
        <h2 className={classes.AboutHeading}>About Me</h2>
        <p className={classes.AboutText}>
          I’m a passionate photographer with experience in capturing the perfect moments in weddings, events, and personal photoshoots. My goal is to bring out the beauty and emotion in every shot. Let's create something amazing together.
        </p>
        <button className={classes.LearnMoreButton}>Learn More</button>
      </div> */}
    </div>
  );
}

export default Home;
