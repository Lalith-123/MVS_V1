import React from 'react'
import classes from './About.module.css';

function About() {
  return (
    <div className={classes.About}>
        <h1 className={classes.AboutHeading}>About</h1>
        <div className={classes.SubAbout}>
            <image className={classes.image}></image>
            <p className={classes.info}>about info</p>
        </div>  
        <div className={classes.SubAbout}>
            <p className={classes.info}>about ads</p>
            <video className={classes.video}></video>
        </div>
        <div className={classes.SubAbout}>
            <video className={classes.video}></video>
            <p className={classes.info}>about photo shoots</p>
        </div>  
        <div className={classes.SubAbout}>
            <p className={classes.info}>about short films</p>
            <video className={classes.video}></video>
        </div>
        <div className={classes.SubAbout}>
            <video className={classes.video}></video>
            <p className={classes.info}>about marrage and pre-wedding</p>
        </div>    
    </div>
  )
}

export default About