import React from 'react';
import classes from './Header.module.css';

function Header({ scrollToHome, scrollToAbout, scrollToMyWorks, scrollToContact }) {
  return (
    <div className={classes.header}>
        <div className={classes.logo}>MVS</div>
        <div className={classes.menu}>
            <button className={classes.button} onClick={scrollToHome}>Home</button>
            <button className={classes.button} onClick={scrollToAbout}>About</button>
            <button className={classes.button} onClick={scrollToMyWorks}>My Works</button>
            <button className={classes.button} onClick={scrollToContact}>Contact</button>
        </div>
    </div>
  );
}

export default Header;
